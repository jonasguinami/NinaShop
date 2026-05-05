// Base de Dados
const products = [
    {
        id: 1,
        name: "Perfume Sophisticate - David Beckham Classic",
        price: 299.90,
        category: "Presentes",
        images: ["perfume1.jpg", "perfume2.jpg"], 
        desc: "Aroma fresco sofisticado com notas cítricas e amadeiradas.",
        specs: "O Classic Blue de David Beckham é a essência do fresco sofisticado.\n\n• Notas de Topo: Abacaxi, Toranja e Folhas de Violeta.\n• Notas de Coração: Gerânio, Sálvia Esclareia e Maçã.\n• Notas de Fundo: Cashmeran, Patchouli e Musgo.\n\nIdeal para o dia a dia e para manter uma presença limpa e elegante."
    },
    {
        id: 2,
        name: "Vinho Branco Chardonnay Reserve",
        price: 145.00,
        category: "Bebidas",
        images: ["vinhobranco.jpg"],
        desc: "Harmonização perfeita para queijos Brie e momentos especiais.",
        specs: "Safra 2024, produzido nas melhores vinícolas.\n\nEste Chardonnay possui uma coloração amarelo-palha brilhante. No nariz, apresenta aromas intensos de frutas tropicais como abacaxi e maracujá, com um leve toque de baunilha derivado do envelhecimento em carvalho.\n\n• Volume: 750ml\n• Teor Alcoólico: 13%\n• Temperatura ideal: 8°C a 10°C"
    },
    {
        id: 3,
        name: "Teclado Mecânico RGB Minimalist",
        price: 380.00,
        category: "Eletrônicos",
        images: ["teclado.jpg"],
        desc: "Design clean com switches lubrificados para melhor performance.",
        specs: "Construído para durar e para quem busca estética e silêncio.\n\n• Switches: Red Linear (Lubrificados de fábrica)\n• Conexão: Wireless 2.4GHz, Bluetooth 5.0 e Cabo USB-C.\n• Bateria: 4000mAh (Até 200 horas sem RGB)\n• Formato: 75% Compacto\n• Keycaps: PBT Double-shot perfil Cherry."
    },
    {
        id: 4,
        name: "Cesta de Café da Manhã Premium",
        price: 180.00,
        category: "Cestas",
        images: ["cesta.jpg"],
        desc: "Cesta completa com frios, pães e sucos naturais.",
        specs: "A cesta ideal para surpreender quem você ama.\n\n• 2 Tipos de pães artesanais\n• Porção de queijo Brie e salame\n• Geleia de morango\n• Suco de uva integral 500ml\n• Acompanha laço e cartão personalizado."
    }
];

// Tenta buscar do LocalStorage, se não tiver, cria um array vazio.
let cart = JSON.parse(localStorage.getItem('guinaShop_cart')) || [];
let currentOpenProduct = null;
let carouselTimer = null;

let currentCategory = 'Todos';
let selectedDelivery = 'Retirar na Loja';
let selectedPayment = 'Pix';

document.addEventListener('DOMContentLoaded', () => {
    setupTheme();
    renderCategories();
    renderHome();
    updateCart(); 
});

// Fechar modais ao clicar fora
document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal(this.id);
        }
    });
});

// FUNÇÃO PARA SALVAR O CARRINHO
function saveCart() {
    localStorage.setItem('guinaShop_cart', JSON.stringify(cart));
}

// Renderizar Categorias
function renderCategories() {
    const slider = document.getElementById('categorySlider');
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    const allCategories = ['Todos', ...uniqueCategories];
    
    slider.innerHTML = allCategories.map(cat => `
        <div class="cat-pill ${cat === currentCategory ? 'active' : ''}" onclick="selectCategory('${cat}')">
            ${cat}
        </div>
    `).join('');
}

function selectCategory(cat) {
    currentCategory = cat;
    renderCategories(); 
    renderHome(document.getElementById('searchInput').value);
}

// Renderizar Produtos (Home)
function renderHome(filterText = "") {
    const grid = document.getElementById('productGrid');
    
    const filtered = products.filter(p => {
        const matchesText = p.name.toLowerCase().includes(filterText.toLowerCase());
        const matchesCat = currentCategory === 'Todos' || p.category === currentCategory;
        return matchesText && matchesCat;
    });
    
    grid.innerHTML = filtered.map(p => {
        const oldPrice = p.price * 1.20; 
        return `
        <div class="product-card" onclick="openProductModal(${p.id})">
            <div style="position: absolute; top: 8px; left: 8px; z-index: 10;" class="discount-badge">-20%</div>
            <img src="${p.images[0]}" class="card-img" alt="${p.name}">
            <div class="card-info">
                <h4>${p.name}</h4>
                <div class="price-container">
                    <span class="old-price">R$ ${oldPrice.toFixed(2).replace('.', ',')}</span>
                </div>
                <p class="price">R$ ${p.price.toFixed(2).replace('.', ',')}</p>
            </div>
        </div>
    `}).join('');
}

// Navegação entre abas
function navigate(view) {
    document.querySelectorAll('.tab-view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    
    document.getElementById(`view-${view}`).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Lógica dos Modais
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    if(modalId === 'productModal') {
        document.body.style.overflow = '';
        clearInterval(carouselTimer);
    }
}

function openProductModal(id) {
    currentOpenProduct = products.find(p => p.id === id);
    const modal = document.getElementById('productModal');
    
    const oldPrice = currentOpenProduct.price * 1.20;
    document.getElementById('modalOldPrice').innerText = `R$ ${oldPrice.toFixed(2).replace('.', ',')}`;
    document.getElementById('modalPrice').innerText = `R$ ${currentOpenProduct.price.toFixed(2).replace('.', ',')}`;
    document.getElementById('modalTitle').innerText = currentOpenProduct.name;
    document.getElementById('modalDesc').innerText = currentOpenProduct.desc;
    
    const track = document.getElementById('modalCarousel');
    track.innerHTML = currentOpenProduct.images.map(img => `
        <img src="${img}" alt="Imagem do Produto">
    `).join('');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
    startCarousel();
}

function openSpecsModal() {
    document.getElementById('specsContent').innerText = currentOpenProduct.specs;
    document.getElementById('specsModal').classList.add('active');
}

function openCheckoutModal() {
    document.getElementById('checkoutModal').classList.add('active');
}

function selectOption(type, element, value) {
    document.querySelectorAll(`.${type}-opt`).forEach(el => el.classList.remove('active'));
    element.classList.add('active');
    
    if(type === 'delivery') selectedDelivery = value;
    if(type === 'payment') selectedPayment = value;
}

function startCarousel() {
    const track = document.getElementById('modalCarousel');
    if (currentOpenProduct.images.length <= 1) return;
    
    let step = 0;
    carouselTimer = setInterval(() => {
        step = (step + 1) % currentOpenProduct.images.length;
        track.scrollTo({ left: track.clientWidth * step, behavior: 'smooth' });
    }, 3000);
}

// CARRINHO E LOCALSTORAGE
function addItemToCart() {
    const item = cart.find(i => i.id === currentOpenProduct.id);
    if(item) item.qty++;
    else cart.push({...currentOpenProduct, qty: 1});
    
    saveCart(); 
    updateCart();
    closeModal('productModal'); 
}

function updateCart() {
    const list = document.getElementById('cartList');
    const badge = document.getElementById('badgeCount');
    const totalEl = document.getElementById('cartTotal');
    
    badge.innerText = cart.reduce((acc, i) => acc + i.qty, 0);
    
    if(cart.length === 0) {
        document.getElementById('cartEmpty').style.display = 'flex';
        document.getElementById('cartFooter').style.display = 'none';
        list.innerHTML = '';
        return;
    }

    document.getElementById('cartEmpty').style.display = 'none';
    document.getElementById('cartFooter').style.display = 'block'; 
    
    let total = 0;
    
    list.innerHTML = cart.map(item => {
        total += item.price * item.qty;
        return `
            <div class="info-card" style="padding: 12px; margin-bottom: 12px;">
                <img src="${item.images[0]}" style="width: 60px; height: 60px; border-radius: 16px; object-fit: cover; flex-shrink: 0;" alt="${item.name}">
                <div style="flex: 1; min-width: 0;">
                    <h4 style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</h4>
                    <p style="color: var(--accent-color); font-weight: 700;">R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</p>
                </div>
                <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
                    <button onclick="changeQty(${item.id}, -1)" class="qty-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                    <span style="font-weight: 700; font-size: 16px; min-width: 24px; text-align: center;">${item.qty}</span>
                    <button onclick="changeQty(${item.id}, 1)" class="qty-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    totalEl.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    item.qty += delta;
    if(item.qty <= 0) cart = cart.filter(i => i.id !== id);
    
    saveCart(); 
    updateCart();
}

function clearCart() { 
    cart = []; 
    saveCart(); 
    updateCart(); 
}

// ENVIAR WHATSAPP (FINAL)
function confirmCheckout() {
    const phone = "5551995287595"; // Substitua pelo número real (com código do país, sem + ou espaços)
    let msg = "*📝 NOVO PEDIDO - Guina Shop*\n\n";
    
    cart.forEach(i => msg += `• ${i.qty}x ${i.name}\n`);
    
    msg += `\n*Total:* ${document.getElementById('cartTotal').innerText}`;
    msg += `\n*Forma de Entrega:* ${selectedDelivery}`;
    msg += `\n*Forma de Pagamento:* ${selectedPayment}`;
    
    if(selectedDelivery === 'Entrega via App') {
        msg += `\n\n_Por favor, me informe o endereço completo para calcularmos a entrega._`;
    }

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
    closeModal('checkoutModal');
}

// SETUP DO TEMA
function setupTheme() {
    const btn = document.getElementById('themeToggle');
    
    const savedTheme = localStorage.getItem('guinaShop_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const updateIcon = () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        btn.innerHTML = isDark 
            ? `<svg viewBox="0 0 24 24" class="svg-icon"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.2 4.2l1.4 1.4m12.8 12.8l1.4 1.4M1 12h2m18 0h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>`
            : `<svg viewBox="0 0 24 24" class="svg-icon"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`;
    };

    btn.onclick = () => {
        const current = document.documentElement.getAttribute('data-theme');
        const newTheme = current === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('guinaShop_theme', newTheme); 
        updateIcon();
    };
    
    updateIcon();
}

// Escuta a barra de pesquisa
document.getElementById('searchInput').oninput = (e) => renderHome(e.target.value);
