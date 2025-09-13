document.addEventListener('DOMContentLoaded', () => {
    // --- DATA FOR DASHBOARD ---
    const activityData = [
        { product: 'LP-ULTRA-X1', event: 'Kiểm tra chất lượng', status: 'Hoàn thành', statusClass: 'delivered' },
        { product: 'MASK-MED-4P', event: 'Đang đóng gói', status: 'Đang xử lý', statusClass: 'production' },
        { product: 'CF-RB-07', event: 'Nhập kho', status: 'Hoàn thành', statusClass: 'delivered' },
        { product: 'TV-OLED-4K-55', event: 'Bắt đầu vận chuyển', status: 'Đang vận chuyển', statusClass: 'shipping' }
    ];

    const chartData = {
        labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
        transactions: [110, 130, 125, 150, 145, 160, 155]
    };

    // --- DOM ELEMENTS ---
    const activityTableBody = document.getElementById('activityTableBody');
    const activityChartCanvas = document.getElementById('activityChart');

    // --- RENDER FUNCTIONS ---
    function renderActivity(activities) {
        if (!activityTableBody) return;
        activityTableBody.innerHTML = '';
        activities.forEach(act => {
            const row = `
                <tr>
                    <td><strong>${act.product}</strong></td>
                    <td>${act.event}</td>
                    <td><span class="status ${act.statusClass}">${act.status}</span></td>
                </tr>
            `;
            activityTableBody.insertAdjacentHTML('beforeend', row);
        });
    }

    function renderChart() {
        if (!activityChartCanvas) return;

        const ctx = activityChartCanvas.getContext('2d');

        // Gradient fill
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(37, 117, 252, 0.5)');
        gradient.addColorStop(1, 'rgba(106, 17, 203, 0)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: 'Số giao dịch',
                    data: chartData.transactions,
                    backgroundColor: gradient,
                    borderColor: '#6a11cb',
                    borderWidth: 2,
                    pointBackgroundColor: '#6a11cb',
                    pointRadius: 4,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: {
                            color: '#f0f2f5'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // --- INITIAL RENDER ---
    renderActivity(activityData);
    renderChart();
});