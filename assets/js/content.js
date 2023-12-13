$(document).ready(function () {
    // 버튼 클릭 시 스크롤과 콘텐츠 토글 기능
    $('button[data-target]').on('click', function () {
        var target = $(this).data('target');
        var content = $('#' + target);
        var button = $(this);

        // 다른 모든 콘텐츠 닫기
        $('.section-content').not(content).slideUp(600);
        $('.navbar-button').not(button).removeClass('active');

        // 스크롤 딜레이 시간 (밀리초)
        var scrollDelay = 500; // 0.5초 딜레이 (열릴 때만 적용)

        // 콘텐츠 열 때 스크롤 딜레이와 함께 실행
        if (!content.is(':visible')) {
            setTimeout(function () {
                $('html, body').animate({
                    scrollTop: content.offset().top
                }, 600);
            }, scrollDelay);
        }

        // 콘텐츠의 디스플레이 상태를 토글합니다.
        content.slideToggle(600, function () {
            if (content.is(':visible')) {
                button.addClass('active');
            } else {
                button.removeClass('active');
            }
        });
    });

    // 버튼 클릭 시 스크롤과 콘텐츠 토글 기능
    $('.next-button, .prev-button').on('click', function () {
        var target = $(this).data('target');
        var content = $('#' + target);
        var button = $('button[data-target="' + target + '"]');

        // 다른 모든 콘텐츠 닫기
        $('.section-content').not(content).slideUp(600);
        $('.navbar-button').not(button).removeClass('active');

        // 해당 콘텐츠 열기
        content.slideDown(600);
        button.addClass('active');

        // 스크롤 딜레이 시간 (밀리초)
        var scrollDelay = 500; // 0.5초 딜레이

        // 스크롤 이동
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: content.offset().top
            }, 600);
        }, scrollDelay);
    });

});