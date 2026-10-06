$(document).ready(function () {

    // Nút Clear: xóa sạch dữ liệu
    $('#btnClear').click(function () {
        $('#regForm')[0].reset();
    });

    // Nút Finished: Validate dữ liệu
    $('#btnFinished').click(function () {
        let errors = [];

        // 1. Kiểm tra không được để rỗng
        let name = $('#name').val().trim();
        let sex = $('input[name="sex"]:checked').val();
        let email = $('#email').val().trim();
        let birthday = $('#birthday').val().trim();
        let address = $('#address').val().trim();
        let city = $('#city').val().trim();
        let region = $('#region').val();
        let zip = $('#zip').val().trim();

        if (!name) errors.push("- Tên không được để rỗng.");
        if (!sex) errors.push("- Chưa chọn Giới tính.");
        if (!email) errors.push("- Email không được để rỗng.");
        if (!birthday) errors.push("- Ngày sinh không được để rỗng.");
        if (!address) errors.push("- Địa chỉ không được để rỗng.");
        if (!city) errors.push("- Thành phố không được để rỗng.");
        if (!region) errors.push("- Chưa chọn Khu vực (Region).");
        if (!zip) errors.push("- ZIP code không được để rỗng.");

        // 2. Validate Email theo yêu cầu:
        // - Đúng 1 ký tự '@'
        // - Trước '@' là account name, tối đa 1 dấu chấm
        // - Sau '@' là domain, có ít nhất 1 dấu chấm
        if (email) {
            let atParts = email.split('@');
            if (atParts.length !== 2) {
                errors.push("- Email phải chứa đúng 1 ký tự '@'.");
            } else {
                let account = atParts[0];
                let domain = atParts[1];

                if (!account) {
                    errors.push("- Tên tài khoản email trước '@' không được rỗng.");
                } else {
                    let dotCountAcc = (account.match(/\./g) || []).length;
                    if (dotCountAcc > 1) {
                        errors.push("- Tên tài khoản trước '@' chỉ được chứa tối đa 1 dấu chấm.");
                    }
                }

                if (!domain) {
                    errors.push("- Domain email sau '@' không được rỗng.");
                } else {
                    let dotCountDom = (domain.match(/\./g) || []).length;
                    if (dotCountDom < 1) {
                        errors.push("- Tên miền sau '@' phải chứa ít nhất 1 dấu chấm.");
                    }
                }
            }
        }

        // 3. Validate Ngày sinh (mm/dd/yyyy hoặc mm-dd-yyyy)
        if (birthday) {
            let dateRegex = /^(\d{2})[\/\-](\d{2})[\/\-](\d{4})$/;
            let match = birthday.match(dateRegex);

            if (!match) {
                errors.push("- Ngày sinh phải có định dạng MM/DD/YYYY hoặc MM-DD-YYYY.");
            } else {
                let month = parseInt(match[1], 10);
                let day = parseInt(match[2], 10);
                let year = parseInt(match[3], 10);

                let currentYear = new Date().getFullYear();

                if (month < 1 || month > 12) {
                    errors.push("- Tháng phải từ 01 đến 12.");
                }
                if (day < 1 || day > 31) {
                    errors.push("- Ngày nhập không hợp lệ.");
                }
                if (year >= currentYear) {
                    errors.push(`- Năm sinh phải nhỏ hơn năm hiện tại (${currentYear}).`);
                }
            }
        }

        // 4. Validate ZIP code: đúng 5 chữ số
        if (zip) {
            let zipRegex = /^\d{5}$/;
            if (!zipRegex.test(zip)) {
                errors.push("- ZIP code phải gồm đúng 5 chữ số.");
            }
        }

        // Hiển thị kết quả kiểm tra
        if (errors.length > 0) {
            alert("LỖI DỮ LIỆU NHẬP VÀO:\n" + errors.join("\n"));
        } else {
            alert("Đăng ký thông tin thành công!");
        }
    });
});