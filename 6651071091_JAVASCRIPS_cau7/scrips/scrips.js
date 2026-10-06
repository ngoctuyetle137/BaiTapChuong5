$(document).ready(function() {$('#linkForm').on('submit', function(e) {
        e.preventDefault();
        let url = $('#linkInput').val().trim();
        if (url === '') {
            alert('Vui lòng nhập đường link!');
            return;
        }
        if (!/^https?:\/\//i.test(url)) {
            url = 'https://' + url;
        }
        let isConfirm = confirm(`Bạn có muốn chuyển đến trang: ${url} ?`);
        if (isConfirm) {
            window.location.href = url;
        }
    });
});