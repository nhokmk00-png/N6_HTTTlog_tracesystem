document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const productsForSelection = [
        { id: 'LP-ULTRA-X1', name: 'Laptop UltraPro X1', category: 'Điện tử', status: 'Đang sản xuất', statusClass: 'production' },
        { id: 'CF-RB-07', name: 'Cà phê Robusta Tây Nguyên', category: 'Nông sản', status: 'Đang vận chuyển', statusClass: 'shipping' },
        { id: 'TV-OLED-4K-55', name: 'Smart TV OLED 4K 55 inch', category: 'Điện tử', status: 'Đang vận chuyển', statusClass: 'shipping' },
        { id: 'SHRIMP-FRO-01', name: 'Tôm sú đông lạnh xuất khẩu', category: 'Nông sản', status: 'Đã giao hàng', statusClass: 'delivered' },
        { id: 'MASK-MED-4P', name: 'Khẩu trang y tế 4 lớp', category: 'Dược phẩm', status: 'Đang sản xuất', statusClass: 'production' }
    ];

    // --- DOM ELEMENTS ---
    const stepItems = document.querySelectorAll('.step-item');
    const wizardContents = document.querySelectorAll('.wizard-content');
    const nextButtons = document.querySelectorAll('.btn-next');
    const prevButtons = document.querySelectorAll('.btn-prev');
    const productSelectionList = document.getElementById('productSelectionList');
    const productSearchInput = document.getElementById('productSearchInput');
    const selectedProductInfo = document.querySelector('#selectedProductInfo strong');
    const gpsButton = document.getElementById('gpsButton');
    const locationInput = document.getElementById('eventLocation');
    const uploadButton = document.getElementById('uploadButton');
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    const submitEventButton = document.getElementById('submitEventButton');

    let selectedProductId = null;

    // --- FUNCTIONS ---
    function renderProducts(products) {
        productSelectionList.innerHTML = '';
        products.forEach(product => {
            const item = document.createElement('div');
            item.className = 'product-selection-item';
            item.dataset.id = product.id;
            item.innerHTML = `
                <div>
                    <strong>${product.name} (${product.id})</strong>
                    <span>Danh mục: ${product.category}</span>
                </div>
                <span class="tag status-${product.statusClass}">${product.status}</span>
            `;
            item.addEventListener('click', () => {
                document.querySelectorAll('.product-selection-item').forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                selectedProductId = product.id;
                selectedProductInfo.textContent = `${product.name} (${product.id})`;
            });
            productSelectionList.appendChild(item);
        });
    }

    function goToStep(stepNumber) {
        stepItems.forEach(item => {
            item.classList.toggle('active', item.dataset.step <= stepNumber);
        });
        wizardContents.forEach(content => {
            content.classList.toggle('active', content.id === `step${stepNumber}`);
        });
    }

    function handleFileUpload(files) {
        fileList.innerHTML = '<h4>Tệp đã chọn:</h4>';
        for (const file of files) {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.textContent = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
            fileList.appendChild(fileItem);
        }
    }

    // --- EVENT LISTENERS ---
    nextButtons.forEach(button => {
        button.addEventListener('click', () => goToStep(button.dataset.target));
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => goToStep(button.dataset.target));
    });

    productSearchInput.addEventListener('input', () => {
        const searchTerm = productSearchInput.value.toLowerCase();
        const filteredProducts = productsForSelection.filter(p =>
            p.name.toLowerCase().includes(searchTerm) || p.id.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    });

    // FIX: GPS Button Functionality
    gpsButton.addEventListener('click', () => {
        locationInput.value = 'Đang lấy vị trí...';
        gpsButton.querySelector('i').classList.add('fa-spin');

        setTimeout(() => {
            // Simulate getting GPS coordinates
            locationInput.value = 'Khu Công nghệ cao, P. Tân Phú, Quận 9, TP.HCM';
            gpsButton.querySelector('i').classList.remove('fa-spin');
        }, 1500); // Simulate a 1.5 second delay
    });

    // FIX: File Upload Functionality
    uploadButton.addEventListener('click', () => {
        fileInput.click();
    });
    fileInput.addEventListener('change', (event) => {
        handleFileUpload(event.target.files);
    });

    // Final Submit
    submitEventButton.addEventListener('click', () => {
        alert('Đã thêm sự kiện thành công!');
        window.location.href = 'index.html';
    });

    // --- INITIAL RENDER ---
    renderProducts(productsForSelection);
});