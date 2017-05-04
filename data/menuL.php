<div class="sc_menu_wrapper">
    <div class="sc_menu">
        <a href="/13" <?= $_SERVER['REQUEST_URI'] == '/13' ? 'class="active"' : '' ?>>
            <IMG height=128 alt="Культурный поход фрикoff на джас" src="/img/gif/alb/kp_m.gif">
        </a>
        <a href="/12" <?= $_SERVER['REQUEST_URI'] == '/12' ? 'class="active"' : '' ?>>
            <IMG height=128 alt="Хрен Пикассо" src="/img/gif/alb/hp_m.gif">
        </a>
        <a href="/11" <?= $_SERVER['REQUEST_URI'] == '/11' ? 'class="active"' : '' ?>>
            <IMG height=128 alt="Большие Уши" src="/img/gif/alb/big_m.gif">
        </a>
        <a href="/9" <?= $_SERVER['REQUEST_URI'] == '/9' ? 'class="active"' : '' ?>>
            <IMG height=128 alt="Чистая грязь" src="/img/gif/alb/graz_m.gif">
        </a>
        <a href="/8" <?= $_SERVER['REQUEST_URI'] == '/8' ? 'class="active"' : '' ?>>
            <IMG height=128 alt="Vincent" src="/img/gif/alb/vincent_m.gif">
        </a>
        <a href="/7" <?= $_SERVER['REQUEST_URI'] == '/7' ? 'class="active"' : '' ?>>
            <IMG height=128 alt="Екнеклика" src="/img/gif/alb/ekneklika_m.gif">
        </a>
        <a href="/6" <?= $_SERVER['REQUEST_URI'] == '/6' ? 'class="active"' : '' ?>>
            <IMG height=128 alt="Бравшие Мудандзян" src="/img/gif/alb/mudan_m.gif">
        </a>
        <a href="/5" <?= $_SERVER['REQUEST_URI'] == '/5' ? 'class="active"' : '' ?>>
            <IMG height=128 alt="Цветочки" src="/img/gif/alb/zvet_fas_m.gif">
        </a>
        <a href="/4" <?= $_SERVER['REQUEST_URI'] == '/4' ? 'class="active"' : '' ?>>
            <IMG height=128 alt="Несусвет" src="/img/gif/alb/nessv.gif">
        </a>
        <a href="/3" <?= $_SERVER['REQUEST_URI'] == '/3' ? 'class="active"' : '' ?>>
            <IMG width=128 alt="Душа Мбе" src="/img/gif/alb/dusmbe.gif">
        </a>
        <a href="/2" <?= $_SERVER['REQUEST_URI'] == '/2' ? 'class="active"' : '' ?>>
            <img width=128 alt="Уха из сомиков кандиру" src="/img/gif/alb/somiki.gif">
        </a>
        <a href="/1" <?= $_SERVER['REQUEST_URI'] == '/1' ? 'class="active"' : '' ?>>
            <IMG height=128 alt="Odin" src="/img/gif/alb/odin.gif">
        </a>
    </div>
</div>
<script>
    $(function () {
        makeScrollable("div.sc_menu_wrapper", "div.sc_menu");
    });
</script>