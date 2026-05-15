// Base de Dados
const products = [
    {
        id: 1,
        name: "Caixinha Transparente com Bombom e Flor",
        price: 15.00,
        category: "Lembrancinhas",
        images: ["img1.png"],
        desc: "Delicada caixinha transparente acompanhada de um bombom e uma flor.",
        specs: "Uma lembrancinha carinhosa e acessível para qualquer ocasião.\n\n• Embalagem: Caixinha de acetato transparente\n• Conteúdo: 1 flor decorativa e 1 bombom\n• Ideal para: Mimos rápidos e agradecimentos."
    },
    {
        id: 3,
        name: "Buquê Flor e Bombom",
        price: 45.00,
        category: "Buquês",
        images: ["img3.png"],
        desc: "Lindo buquê combinando a beleza das flores com o sabor dos bombons.",
        specs: "Para surpreender quem você ama com doçura e beleza.\n\n• Conteúdo: Flores selecionadas e bombons variados\n• Embalagem: Papel especial para buquê com laço decorativo\n• Perfeito para presentes românticos ou datas comemorativas."
    },
    {
        id: 4,
        name: "Buquê Flor, Bombom e Ursinho Pequeno",
        price: 50.00,
        category: "Buquês",
        images: ["img4.png"],
        desc: "Um presente completo: flores, bombons e um adorável ursinho de pelúcia.",
        specs: "O trio perfeito para arrancar sorrisos.\n\n• Conteúdo: Flores decorativas, bombons sortidos e 1 ursinho de pelúcia pequeno\n• Embalagem: Papel de buquê resistente com fita\n• Ideal para: Dia dos Namorados, aniversários e surpresas."
    },
    {
        id: 5,
        name: "Cesta Mãe Especial (Pequena/Média)",
        price: 80.00,
        category: "Cestas",
        images: ["img5.png"],
        desc: "Cesta charmosa preparada com todo o carinho para o Dia das Mães.",
        specs: "Um presente clássico e emocionante.\n\n• Tamanho: Pequena para Média\n• Conteúdo: Itens selecionados especialmente para presentear mães\n• Embalagem: Cesta decorada com laço e papel celofane."
    },
    {
        id: 6,
        name: "Xícara Tema Mãe com Flor e Ursinho Pequeno",
        price: 50.00,
        category: "Kits",
        images: ["img6.png"],
        desc: "Kit afetivo contendo uma xícara temática, flor e ursinho.",
        specs: "Perfeito para o café da manhã ou para decorar o cantinho preferido dela.\n\n• Conteúdo: 1 Xícara com estampa para mãe, 1 flor decorativa e 1 ursinho pequeno\n• Detalhes: Tudo montado de forma harmoniosa para presente."
    },
    {
        id: 7,
        name: "Buquê Exclusivo de Bombons",
        price: 40.00,
        category: "Buquês",
        images: ["img7.png"],
        desc: "Um buquê inteiramente feito de deliciosos bombons.",
        specs: "A escolha certa para os apaixonados por chocolate.\n\n• Conteúdo: Bombons sortidos de alta qualidade\n• Montagem: Estruturado em formato de buquê tradicional\n• Embalagem: Papel decorado com laço reforçado."
    },
    {
        id: 8,
        name: "Xícara Decorada com Trufa",
        price: 40.00,
        category: "Lembrancinhas",
        images: ["img8.png"],
        desc: "Uma linda xícara acompanhada de uma trufa artesanal.",
        specs: "Lembrancinha prática e saborosa.\n\n• Conteúdo: 1 Xícara de cerâmica decorada e 1 trufa recheada\n• Apresentação: Embalada pronta para presentear\n• Ótima opção para presentear colegas, professoras ou amigas."
    },
    {
        id: 9,
        name: "Buquê com Flor e Bombom (Opção Premium)",
        price: 45.00,
        category: "Buquês",
        images: ["img9.png"],
        desc: "Arranjo delicado em formato de buquê misturando flores e chocolates.",
        specs: "Design elegante para um presente inesquecível.\n\n• Conteúdo: Flores ornamentais e bombons finos\n• Cuidado: Montado à mão com riqueza de detalhes."
    },
    {
        id: 10,
        name: "Ursinho de Pelúcia com Flor ou Balão",
        price: 80.00,
        category: "Pelúcias",
        images: ["img10.png"],
        desc: "Pelúcia super macia acompanhada de flor ou balão festivo.",
        specs: "Um presente fofo que dura para sempre.\n\n• Tamanho: Pelúcia de tamanho médio\n• Adicionais: Acompanha uma flor decorativa ou um balão (conforme disponibilidade)\n• Qualidade: Material antialérgico e super macio ao toque."
    },
    {
        id: 11,
        name: "Xícara com Trufa e Niqueleira",
        price: 40.00,
        category: "Kits",
        images: ["img11.png"],
        desc: "Kit triplo: xícara, trufa deliciosa e uma prática niqueleira.",
        specs: "Útil e doce na medida certa.\n\n• Conteúdo: 1 Xícara, 1 Trufa e 1 Niqueleira (porta-moedas) feminina\n• Vantagem: Combina um mimo saboroso com um acessório para o dia a dia."
    },
    {
        id: 12,
        name: "Mini Cesta Mãe: Xícara, Bombons e Niqueleira",
        price: 45.00,
        category: "Cestas",
        images: ["img12.png"],
        desc: "Uma versão compacta de cesta recheada de mimos úteis e doces.",
        specs: "Mini cesta encantadora.\n\n• Conteúdo: 1 Xícara temática para mãe, bombons sortidos e 1 niqueleira\n• Embalagem: Base de mini cesta decorada com laço."
    },
    {
        id: 13,
        name: "Ursinho de Pelúcia com Flor ou Balão (Modelo 2)",
        price: 80.00,
        category: "Pelúcias",
        images: ["img13.png"],
        desc: "Pelúcia super macia acompanhada de flor ou balão festivo.",
        specs: "Uma variação fofa para presentear quem você ama.\n\n• Tamanho: Pelúcia média\n• Adicionais: Flor artesanal ou balão decorativo\n• Toque extra: Acabamento premium com fita."
    },
    {
        id: 14,
        name: "Cadernetinha Mãe com Caneta e Trufa",
        price: 25.00,
        category: "Papelaria",
        images: ["img14.png"],
        desc: "Kit papelaria afetiva contendo caderneta, caneta e uma trufa.",
        specs: "Para anotar os melhores momentos com um toque doce.\n\n• Conteúdo: 1 Caderneta de anotações (tema Mãe), 1 Caneta estilizada e 1 Trufa\n• Perfeito para: Mães que amam organização e anotações."
    },
    {
        id: 15,
        name: "Cesta Café da Manhã Especial Dia das Mães",
        price: 70.00,
        category: "Cestas",
        images: ["img15.png"],
        desc: "Cesta completa para um café da manhã inesquecível.",
        specs: "Comece o dia dela com uma surpresa incrível.\n\n• Conteúdo: Mix de itens de café da manhã (pães, torradas, suco, etc.)\n• Embalagem: Cesta tradicional com decoração temática de Dia das Mães."
    },
    {
        id: 16,
        name: "Buquê de Rosa Artesanal com Ursinho Pequeno e Balão",
        price: 50.00,
        category: "Buquês",
        images: ["img16.png"],
        desc: "Rosa feita à mão, acompanhada de pelúcia e balão comemorativo.",
        specs: "A beleza que não murcha.\n\n• Conteúdo: 1 Rosa artesanal, 1 ursinho pequeno e 1 balão decorativo\n• Durabilidade: Sendo artesanal, a rosa serve como decoração permanente."
    },
    {
        id: 17,
        name: "Cesta de Café da Manhã com Urso Grande",
        price: 130.00,
        category: "Cestas",
        images: ["img17.png", "img18.png"],
        desc: "Cesta premium de café da manhã ideal para o Dia das Mães ou Dia dos Namorados.",
        specs: "A experiência mais completa da nossa loja.\n\n• Versatilidade: Pode ir com a temática 'Mãe' (Foto 1) ou tema neutro para 'Dia dos Namorados' (Foto 2)\n• Conteúdo: Farta seleção de itens de café da manhã e um urso de pelúcia de destaque\n• Apresentação: Montagem luxuosa em cesta grande."
    },
    {
        id: 19,
        name: "Guirlanda com Flores Amarelas Feita à Mão",
        price: 80.00,
        category: "Decoração",
        images: ["img19.png"],
        desc: "Guirlanda artesanal rústica e charmosa com flores amarelas.",
        specs: "Perfeita para enfeitar portas ou ambientes internos.\n\n• Fabricação: 100% artesanal (Handmade)\n• Detalhes: Flores amarelas vibrantes fixadas em base rústica\n• Estilo: Traz alegria e vida para a decoração da casa."
    },
    {
        id: 20,
        name: "Cesta de Café da Manhã com Urso e Flor Artesanal",
        price: 80.00,
        category: "Cestas",
        images: ["img20.png"],
        desc: "Cesta recheada com pelúcia, flores feitas à mão e itens de café.",
        specs: "Equilíbrio perfeito entre fofura e delícias.\n\n• Conteúdo: Itens sortidos de café da manhã, urso de tamanho pequeno/médio e flores artesanais exclusivas\n• Embalagem: Pronta para surpreender logo nas primeiras horas do dia."
    },
    {
        id: 21,
        name: "Bolsinha Infantil Rosa Feita à Mão",
        price: 40.00,
        category: "Infantil",
        images: ["img21.png"],
        desc: "Linda bolsinha artesanal na cor rosa para crianças.",
        specs: "Acessório cheio de charme para as pequenas.\n\n• Produção: Costura e detalhes artesanais\n• Cor predominante: Rosa\n• Material: Tecido leve e seguro para crianças."
    },
    {
        id: 22,
        name: "Boneca de Tecido com Sabonete",
        price: 45.00,
        category: "Infantil",
        images: ["img22.png"],
        desc: "Bonequinha de pano artesanal acompanhada de um sabonete perfumado.",
        specs: "Mimo clássico com cheirinho especial.\n\n• Conteúdo: 1 Boneca de tecido feita à mão e 1 sabonete aromático\n• Diferencial: Peça afetiva, ideal para decoração de quartos ou presente para crianças de todas as idades."
    },
    {
        id: 23,
        name: "Cesta Master: Almofada, Urso, Trufa e Xícara Mãe",
        price: 150.00,
        category: "Cestas",
        images: ["img23.png"],
        desc: "A nossa maior e mais luxuosa cesta, contendo um combo completo de presentes.",
        specs: "Para não deixar faltar absolutamente nada no dia dela.\n\n• Conteúdo: 1 Almofada confortável decorada, 1 Urso de pelúcia, Trufas artesanais e 1 Xícara de porcelana (Tema Dia das Mães)\n• Impacto: Uma cesta volumosa, impressionante e inesquecível.\n• Embalagem: Envolta em celofane premium com laço gigante."
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
