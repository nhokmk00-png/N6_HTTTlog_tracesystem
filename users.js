document.addEventListener('DOMContentLoaded', () => {
    // Added a unique ID to each user
    let usersData = [{
            id: 'user001',
            name: 'Trịnh Hoài Nam',
            email: 'nam.trinh@techcorp.vn',
            phone: '0901234567',
            company: 'Tech Corporation',
            location: 'Quận 1, TP.HCM',
            role: 'Admin',
            status: 'Hoạt động',
            verified: true,
            blockchainId: '0x1A2b...cC4d'
        },
        {
            id: 'user002',
            name: 'Đoàn Thanh Mai',
            email: 'mai.doan@logistics.com',
            phone: '0907654321',
            company: 'Logistics Solutions',
            location: 'Sóng Thần, Bình Dương',
            role: 'Manager',
            status: 'Hoạt động',
            verified: true,
            blockchainId: '0x5E6f...gH8i'
        },
        {
            id: 'user003',
            name: 'Lý Quốc Trung',
            email: 'trung.ly@nongsanviet.vn',
            phone: '0912345678',
            company: 'Nông sản Việt',
            location: 'Cái Bè, Tiền Giang',
            role: 'User',
            status: 'Hoạt động',
            verified: false,
            blockchainId: 'Chưa kết nối'
        },
        {
            id: 'user004',
            name: 'Vương Mỹ Lệ',
            email: 'le.vuong@retail.com',
            phone: '0987654321',
            company: 'Retail Network',
            location: 'Quận 2, TP.HCM',
            role: 'Manager',
            status: 'Tạm khóa',
            verified: true,
            blockchainId: '0x9JkL...mN0p'
        }
    ];

    // --- DOM ELEMENTS ---
    const userTableBody = document.getElementById('userTableBody');
    const searchInput = document.getElementById('userSearchInput');
    const roleFilter = document.getElementById('roleFilter');
    const userModal = document.getElementById('userModal');
    const closeUserModalButton = document.getElementById('closeUserModalButton');
    const modalUserName = document.getElementById('modalUserName');
    const modalUserInfo = document.getElementById('modalUserInfo');


    // --- FUNCTIONS ---
    function renderUsers(users) {
        userTableBody.innerHTML = '';
        if (users.length === 0) {
            userTableBody.innerHTML = '<tr><td colspan="6" class="no-results">Không tìm thấy người dùng.</td></tr>';
            return;
        }

        users.forEach(user => {
            const row = `
                <tr>
                    <td>
                        <div class="user-info-cell">
                            <strong>${user.name}</strong>
                            <span>${user.email}</span>
                            <span>${user.phone}</span>
                        </div>
                    </td>
                    <td>
                        <div class="user-info-cell">
                            <strong>${user.company}</strong>
                            <span>${user.location}</span>
                        </div>
                    </td>
                    <td><span class="tag role-${user.role.toLowerCase()}">${user.role}</span></td>
                    <td>
                        <div class="status-cell">
                            <span class="tag status-${user.status.replace(/\s+/g, '-').toLowerCase()}">${user.status}</span>
                            <span class="tag verified-${user.verified ? 'yes' : 'no'}">${user.verified ? 'Đã xác thực' : 'Chưa xác thực'}</span>
                        </div>
                    </td>
                    <td class="blockchain-id"><span>${user.blockchainId}</span></td>
                    <td class="actions-cell">
                        <button class="action-btn view" title="Xem" onclick="viewUser('${user.id}')"><i class="fas fa-eye"></i></button>
                        <a href="edit-user.html" class="action-btn edit" title="Sửa"><i class="fas fa-pencil-alt"></i></a>
                        <button class="action-btn delete" title="Xóa" onclick="deleteUser('${user.id}', '${user.name}')"><i class="fas fa-trash-alt"></i></button>
                    </td>
                </tr>
            `;
            userTableBody.insertAdjacentHTML('beforeend', row);
        });
    }

    function handleFilter() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedRole = roleFilter.value;

        const filteredUsers = usersData.filter(user => {
            const matchesSearch = user.name.toLowerCase().includes(searchTerm) ||
                user.email.toLowerCase().includes(searchTerm) ||
                user.company.toLowerCase().includes(searchTerm);
            const matchesRole = selectedRole === 'all' || user.role === selectedRole;
            return matchesSearch && matchesRole;
        });
        renderUsers(filteredUsers);
    }

    // --- ACTIONS FUNCTIONS (NEW) ---
    window.viewUser = function(userId) {
        const user = usersData.find(u => u.id === userId);
        if (!user) return;

        modalUserName.textContent = user.name;
        modalUserInfo.innerHTML = `
            <p><strong><i class="fas fa-envelope"></i> Email:</strong> ${user.email}</p>
            <p><strong><i class="fas fa-phone"></i> Điện thoại:</strong> ${user.phone}</p>
            <p><strong><i class="fas fa-building"></i> Công ty:</strong> ${user.company}</p>
            <p><strong><i class="fas fa-map-marker-alt"></i> Địa chỉ:</strong> ${user.location}</p>
            <p><strong><i class="fas fa-user-tag"></i> Vai trò:</strong> <span class="tag role-${user.role.toLowerCase()}">${user.role}</span></p>
            <p><strong><i class="fas fa-check-circle"></i> Trạng thái:</strong> <span class="tag status-${user.status.replace(/\s+/g, '-').toLowerCase()}">${user.status}</span></p>
            <p><strong><i class="fas fa-link"></i> Blockchain ID:</strong> <span class="blockchain-id"><span>${user.blockchainId}</span></span></p>
        `;
        userModal.style.display = 'flex';
    }

    window.deleteUser = function(userId, userName) {
        if (confirm(`Bạn có chắc chắn muốn xóa người dùng "${userName}" không?`)) {
            usersData = usersData.filter(u => u.id !== userId);
            handleFilter(); // Re-render the table after deletion
        }
    }

    function closeUserModal() {
        userModal.style.display = 'none';
    }

    // --- EVENT LISTENERS ---
    searchInput.addEventListener('input', handleFilter);
    roleFilter.addEventListener('change', handleFilter);
    closeUserModalButton.addEventListener('click', closeUserModal);
    window.addEventListener('click', (event) => {
        if (event.target == userModal) {
            closeUserModal();
        }
    });

    // --- INITIAL RENDER ---
    renderUsers(usersData);
});