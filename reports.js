document.addEventListener('DOMContentLoaded', () => {
    const reportData = [
        { id: 'TLBT-2407-05', name: 'Thanh long ruột đỏ', created: '2025-07-15', completed: '2025-07-18', events: 5, status: 'Đã giao hàng', statusClass: 'delivered' },
        { id: 'VITC-GEN-011', name: 'Vitamin C tổng hợp', created: '2025-03-10', completed: '2025-03-20', events: 5, status: 'Đã giao hàng', statusClass: 'delivered' },
        { id: 'LP-ULTRA-X1', name: 'Laptop UltraPro X1', created: '2025-08-20', completed: 'N/A', events: 3, status: 'Đang sản xuất', statusClass: 'production' },
        { id: 'CF-RB-07', name: 'Cà phê Robusta', created: '2025-01-15', completed: 'N/A', events: 4, status: 'Đang vận chuyển', statusClass: 'shipping' }
    ];

    const reportTableBody = document.getElementById('reportTableBody');
    const filterButton = document.querySelector('.report-actions .btn-search');
    const exportButton = document.querySelector('.report-actions .btn-export');

    function renderReport(data) {
        reportTableBody.innerHTML = '';
        if (data.length === 0) {
            reportTableBody.innerHTML = '<tr><td colspan="6" style="text-align:center;">Không có dữ liệu phù hợp.</td></tr>';
            return;
        }
        data.forEach(item => {
            const row = `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${new Date(item.created).toLocaleDateString('vi-VN')}</td>
                    <td>${item.completed !== 'N/A' ? new Date(item.completed).toLocaleDateString('vi-VN') : 'N/A'}</td>
                    <td>${item.events}</td>
                    <td><span class="status ${item.statusClass}">${item.status}</span></td>
                </tr>
            `;
            reportTableBody.insertAdjacentHTML('beforeend', row);
        });
    }

    // --- FUNCTIONALITY FOR BUTTONS ---

    // Filter Button
    filterButton.addEventListener('click', () => {
        const dateFrom = document.getElementById('dateFrom').value;
        const dateTo = document.getElementById('dateTo').value;

        // Simple simulation alert
        alert(`Đang lọc báo cáo từ ngày ${dateFrom || 'đầu'} đến ${dateTo || 'cuối'}.`);

        // In a real application, you would filter the data here and re-render
        // For example:
        /*
        const filteredData = reportData.filter(item => {
            const itemDate = new Date(item.created);
            const fromDate = dateFrom ? new Date(dateFrom) : null;
            const toDate = dateTo ? new Date(dateTo) : null;

            if (fromDate && itemDate < fromDate) return false;
            if (toDate && itemDate > toDate) return false;
            return true;
        });
        renderReport(filteredData);
        */
    });

    // Export Button
    exportButton.addEventListener('click', () => {
        let csvContent = "data:text/csv;charset=utf-8,";

        // Add headers
        const headers = ["Ma San Pham", "Ten San Pham", "Ngay Tao", "Ngay Hoan Tat", "So Su Kien", "Trang Thai"];
        csvContent += headers.join(",") + "\r\n";

        // Add data
        reportData.forEach(item => {
            const row = [item.id, item.name, item.created, item.completed, item.events, item.status];
            csvContent += row.join(",") + "\r\n";
        });

        // Create link and trigger download
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "bao-cao.csv");
        document.body.appendChild(link);

        link.click();
        document.body.removeChild(link);

        alert("Đã bắt đầu tải xuống tệp bao-cao.csv!");
    });


    // Initial render
    renderReport(reportData);
});