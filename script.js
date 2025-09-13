// --- 1. DATA SOURCE (Expanded and more detailed product data) ---
const productsData = [{
        id: 'TLBT-2407-05',
        name: 'Thanh long ruột đỏ Bình Thuận',
        icon: '🐉',
        manufacturer: 'Tập đoàn Nông sản Rồng Việt',
        origin: 'Bình Thuận, Việt Nam',
        status: 'Đã giao hàng',
        category: 'Nông sản',
        details: {
            description: 'Thanh long chuẩn GlobalGAP, vị ngọt thanh mát, không dư lượng thuốc trừ sâu.',
            weight: '500 kg'
        },
        timeline: [
            { icon: '🌱', event: 'Trồng và chăm sóc', date: '01/03/2025', location: 'Trang trại Phan Thiết' },
            { icon: '✂️', event: 'Thu hoạch', date: '15/07/2025', location: 'Trang trại Phan Thiết' },
            { icon: '🧪', event: 'Kiểm định chất lượng (QC Pass)', date: '15/07/2025', location: 'Phòng lab Rồng Việt' },
            { icon: '📦', event: 'Đóng gói', date: '16/07/2025', location: 'Xưởng đóng gói Rồng Việt' },
            { icon: '✅', event: 'Giao hàng thành công', date: '18/07/2025', location: 'Chợ đầu mối Thủ Đức' }
        ],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1996362.439812929!2d107.08630234771781!3d10.93282404037598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x31758ee4d2a4b86f%3A0x44265a73e66a34a!2zUGhhbiBUaGnhur90LCBCw6xuaCBUaHXhuq1uLCBWaeG7h3QgTmFt!3m2!1d10.9348821!2d108.1022938!4m5!1s0x31752f1ea2da4841%3A0x8686d552f592d33!2zQ2jhu6MgxJHhuqd1IG3hu5FpIE5nw7RuZyBz4bqjbiBUaOG7pyDEkOG7qWMsIFF14buRYyBs4buZIDFBLCB0aOG7iyBwaOG7kSBUaOG7pyDEkOG7qWMsIELDrG5oIETGsMahbmcsIFZp4buHdCBOYW0!3m2!1d10.893816!2d106.6910609!5e0!3m2!1svi!2s!4v1726056586616!5m2!1svi!2s"
    },
    {
        id: 'VITC-GEN-011',
        name: 'Vitamin C tổng hợp',
        icon: '🍊',
        manufacturer: 'Công ty Dược phẩm OPC',
        origin: 'Bình Dương, Việt Nam',
        status: 'Đã giao hàng',
        category: 'Dược phẩm',
        details: {
            description: 'Viên sủi bổ sung Vitamin C, tăng cường đề kháng.',
            dosage: '1000mg/viên'
        },
        timeline: [
            { icon: '🔬', event: 'Nghiên cứu & Pha chế', date: '01/02/2025', location: 'Phòng R&D OPC' },
            { icon: '🏭', event: 'Sản xuất', date: '10/03/2025', location: 'Nhà máy Bình Dương' },
            { icon: '📦', event: 'Đóng vỉ & Đóng hộp', date: '15/03/2025', location: 'Dây chuyền đóng gói' },
            { icon: '🚚', event: 'Vận chuyển đến kho tổng', date: '18/03/2025', location: 'Kho dược phẩm TW' },
            { icon: '✅', event: 'Đã giao hàng', date: '20/03/2025', location: 'Nhà thuốc Pharmacity' }
        ],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d494957.1192534563!2d106.33857038153404!3d11.16120894273822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3174d17a43e33285%3A0x803d36b8e24e0586!2zQsOsbmggRMawxqFuZywgVmnhu4d0IE5hbQ!3m2!1d11.333333!2d106.666667!4m5!1s0x31752fec49f1d0b5%3A0x33454a8a69a3028d!2zUGhhcm1hY2l0eSAtIEjDoG5nIFhhbmgsIDEyNSDEkC4gSMOgbmcgWGFuaCwgUGjGsOG7nW5nIDIsIELDrG5oIFRo4bqhbmgsIFRow6BuaCBwaOG7kBIg4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!3m2!1d10.796395!2d106.702715!5e0!3m2!1svi!2s!4v1726056637893!5m2!1svi!2s"
    },
    {
        id: 'LP-ULTRA-X1',
        name: 'Laptop UltraPro X1',
        icon: '💻',
        manufacturer: 'VINATECH Corporation',
        origin: 'TP. Hồ Chí Minh, Việt Nam',
        status: 'Đang sản xuất',
        category: 'Điện tử',
        details: {
            description: 'Laptop mỏng nhẹ, hiệu năng cao cho doanh nhân.',
            storage: '512GB SSD, 16GB RAM'
        },
        timeline: [
            { icon: '🔩', event: 'Nhập khẩu linh kiện (Chip, RAM)', date: '10/08/2025', location: 'Cảng Cát Lái' },
            { icon: '🔧', event: 'Lắp ráp', date: '20/08/2025', location: 'Khu công nghệ cao Q9' },
            { icon: '🔬', event: 'Kiểm tra chất lượng (QC)', date: '25/08/2025', location: 'Phòng QC VINATECH' },
            { icon: '🏭', event: 'Đang sản xuất', date: '28/08/2025', location: 'Chờ xuất xưởng' }
        ],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.483532469956!2d106.75344391535791!3d10.850720192271034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zS2h1IEPDtG5nIE5naOG7hyBDYW8!5e0!3m2!1svi!2s!4v1726056683838!5m2!1svi!2s"
    },
    {
        id: 'CF-RB-07',
        name: 'Cà phê Robusta Tây Nguyên',
        icon: '☕',
        manufacturer: 'The Highland Beans',
        origin: 'Đắk Lắk, Việt Nam',
        status: 'Đang vận chuyển',
        category: 'Nông sản',
        details: {
            description: 'Hạt cà phê Robusta rang mộc, hương vị đậm đà.',
            weight: '1 tấn'
        },
        timeline: [
            { icon: '🌳', event: 'Thu hoạch cà phê', date: '15/01/2025', location: 'Nông trường Cư M\'gar' },
            { icon: '☀️', event: 'Phơi khô tự nhiên', date: '18/01/2025', location: 'Sân phơi' },
            { icon: '🔥', event: 'Rang xay', date: '25/01/2025', location: 'Xưởng rang The Highland Beans' },
            { icon: '📦', event: 'Đóng gói bao bì', date: '27/01/2025', location: 'Xưởng đóng gói' },
            { icon: '🚚', event: 'Đang vận chuyển', date: '28/01/2025', location: 'Trên QL14' }
        ],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1552552.3739814407!2d107.24331778103046!3d11.776092040188613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3171f7d421591871%3A0x842e4633182d334e!2zxJBp4buDbSBUaMawIFPhu5EgMSwgQ8awIE0nYXIvRHVrIExhaywgQ8awIE0nYXIvRHVrIExhaywgxJDEg2sgTMaw6NrLCBWaeG7h3QgTmFt!3m2!1d12.8719541!2d108.0699042!4m5!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!3m2!1d10.8230989!2d106.6296638!5e0!3m2!1svi!2s!4v1726056715694!5m2!1svi!2s"
    }
];

// --- 2. DOM ELEMENTS ---
const productGrid = document.getElementById('productGrid');
const modal = document.getElementById('productModal');
const closeModalButton = document.getElementById('closeModalButton');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const qrButton = document.getElementById('qrButton');
const categoryFilter = document.getElementById('categoryFilter');
const statusFilter = document.getElementById('statusFilter');

// --- 3. FUNCTIONS ---
function renderProducts(products) {
    productGrid.innerHTML = '';
    if (products.length === 0) {
        productGrid.innerHTML = '<p class="no-results">Không tìm thấy sản phẩm nào.</p>';
        return;
    }

    products.forEach(product => {
        const statusClass = {
            'Đã giao hàng': 'delivered',
            'Đang vận chuyển': 'shipping',
            'Đang sản xuất': 'production'
        }[product.status] || '';

        const card = `
            <article class="product-card">
                <div class="card-icon">${product.icon}</div>
                <h3>${product.name}</h3>
                <p><strong>Mã:</strong> ${product.id}</p>
                <p><strong>NSX:</strong> ${product.manufacturer}</p>
                <p><strong>Nguồn gốc:</strong> ${product.origin}</p>
                <div class="card-footer">
                    <span class="status ${statusClass}">${product.status}</span>
                    <button class="btn-details" onclick="showModal('${product.id}')">Chi tiết <i class="fas fa-arrow-right"></i></button>
                </div>
            </article>
        `;
        productGrid.insertAdjacentHTML('beforeend', card);
    });
}

function showModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const modalProductName = document.getElementById('modalProductName');
    const modalProductInfo = document.getElementById('modalProductInfo');
    const modalTimeline = document.getElementById('modalTimeline');
    const productMap = document.getElementById('productMap');

    modalProductName.textContent = product.name;

    modalProductInfo.innerHTML = `
        <p><strong><i class="fas fa-barcode"></i> Mã sản phẩm:</strong> ${product.id}</p>
        <p><strong><i class="fas fa-industry"></i> Nhà sản xuất:</strong> ${product.manufacturer}</p>
        <p><strong><i class="fas fa-file-alt"></i> Mô tả:</strong> ${product.details.description}</p>
        <p><strong><i class="fas fa-map-pin"></i> Nguồn gốc:</strong> ${product.origin}</p>
        ${product.details.dosage ? `<p><strong><i class="fas fa-prescription-bottle-alt"></i> Liều lượng:</strong> ${product.details.dosage}</p>` : ''}
        ${product.details.weight ? `<p><strong><i class="fas fa-weight-hanging"></i> Khối lượng:</strong> ${product.details.weight}</p>` : ''}
        ${product.details.storage ? `<p><strong><i class="fas fa-hdd"></i> Dung lượng:</strong> ${product.details.storage}</p>` : ''}
        ${product.details.size ? `<p><strong><i class="fas fa-tv"></i> Kích thước:</strong> ${product.details.size}</p>` : ''}
        ${product.details.standard ? `<p><strong><i class="fas fa-check-circle"></i> Tiêu chuẩn:</strong> ${product.details.standard}</p>` : ''}
    `;

    const timelineHtml = product.timeline.map(event => `
        <li class="timeline-event">
            <div class="icon">${event.icon}</div>
            <div class="event-details">
                <strong>${event.event}</strong>
                <span><i class="far fa-calendar-alt"></i> ${event.date}</span>
                <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
            </div>
        </li>
    `).join('');
    modalTimeline.innerHTML = `<ul>${timelineHtml}</ul>`;

    productMap.src = product.mapUrl;

    // FIX: Scroll to the top of the modal content when opened
    const scrollableArea = document.querySelector('#productModal .modal-scrollable-area');
    if (scrollableArea) {
        scrollableArea.scrollTop = 0;
    }

    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
    document.getElementById('productMap').src = "about:blank";
}

function handleFilterAndSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedStatus = statusFilter.value;
    
    let filteredProducts = productsData.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                              product.id.toLowerCase().includes(searchTerm) ||
                              product.manufacturer.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesStatus = selectedStatus === 'all' || product.status === selectedStatus;
        return matchesSearch && matchesCategory && matchesStatus;
    });
    
    renderProducts(filteredProducts);
}

// --- 4. EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    if (productGrid) {
        renderProducts(productsData);
    }
});

if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
}
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        closeModal();
    }
});

if (searchButton) {
    searchButton.addEventListener('click', handleFilterAndSearch);
    searchInput.addEventListener('input', handleFilterAndSearch);
    categoryFilter.addEventListener('change', handleFilterAndSearch);
    statusFilter.addEventListener('change', handleFilterAndSearch);
}

if (qrButton) {
    qrButton.addEventListener('click', () => {
        alert('Chức năng quét mã QR sẽ được tích hợp với camera của thiết bị trong phiên bản thực tế.');
    });
}