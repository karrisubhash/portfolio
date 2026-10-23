// Adapted from Jigar Sable's open-source Portfolio-Website template (MIT).
// Removed: right-click/devtools blocking, third-party live chat, and the
// template author's EmailJS keys. Skills are inlined so the page also works
// when opened locally.

$(document).ready(function () {

    $('#menu').on('click keydown', function (e) {
        if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (id && top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling for in-page links only
    $('a[href^="#"]').on('click', function (e) {
        const target = $($(this).attr('href'));
        if (!target.length) return;
        e.preventDefault();
        $('html, body').animate({ scrollTop: target.offset().top - 60 }, 500, 'linear');
    });

    // contact form: opens the visitor's email app with the message filled in
    $('#contact-form').on('submit', function (event) {
        event.preventDefault();
        const f = this;
        const subject = `Portfolio enquiry from ${f.name.value}`;
        const body = `${f.message.value}\n\n— ${f.name.value}\n${f.email.value}${f.phone.value ? '\n' + f.phone.value : ''}`;
        window.location.href = 'mailto:karrisubhash643@gmail.com?subject=' +
            encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        f.reset();
    });
});

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
        document.title = 'Portfolio | Subhash Karri';
        $('#favicon').attr('href', 'assets/images/favicon.png');
    } else {
        document.title = 'Come Back To Portfolio';
        $('#favicon').attr('href', 'assets/images/favhand.png');
    }
});

// typed js effect
new Typed('.typing-text', {
    strings: ['backend development', 'full stack development', 'AI & computer vision', 'Django & REST APIs', 'RAG & LLM apps'],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// skills
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/';
const skills = [
    { name: 'Python', icon: DEVICON + 'python/python-original.svg' },
    { name: 'Django', icon: DEVICON + 'django/django-plain.svg', invert: true },
    { name: 'Django REST', icon: DEVICON + 'djangorest/djangorest-original.svg' },
    { name: 'FastAPI', icon: DEVICON + 'fastapi/fastapi-original.svg' },
    { name: 'PostgreSQL', icon: DEVICON + 'postgresql/postgresql-original.svg' },
    { name: 'OpenCV', icon: DEVICON + 'opencv/opencv-original.svg' },
    { name: 'NumPy', icon: DEVICON + 'numpy/numpy-original.svg' },
    { name: 'JavaScript', icon: DEVICON + 'javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: DEVICON + 'typescript/typescript-original.svg' },
    { name: 'Next.js', icon: DEVICON + 'nextjs/nextjs-original.svg', invert: true },
    { name: 'React Native', icon: DEVICON + 'react/react-original.svg' },
    { name: 'Flutter', icon: DEVICON + 'flutter/flutter-original.svg' },
    { name: 'SQLite', icon: DEVICON + 'sqlite/sqlite-original.svg' },
    { name: 'Docker', icon: DEVICON + 'docker/docker-original.svg' },
    { name: 'Git', icon: DEVICON + 'git/git-original.svg' },
    { name: 'GitHub', icon: DEVICON + 'github/github-original.svg', invert: true },
    { name: 'Postman', icon: DEVICON + 'postman/postman-original.svg' },
    { name: 'C', icon: DEVICON + 'c/c-original.svg' },
    { name: 'HTML5', icon: DEVICON + 'html5/html5-original.svg' },
    { name: 'CSS3', icon: DEVICON + 'css3/css3-original.svg' },
];

document.getElementById('skillsContainer').innerHTML = skills.map(s => `
    <div class="bar">
        <div class="info">
            <img src="${s.icon}" alt="" width="48" height="48" loading="lazy"${s.invert ? ' class="invert"' : ''} />
            <span>${s.name}</span>
        </div>
    </div>`).join('');

// tilt effect
VanillaTilt.init(document.querySelectorAll('.tilt'), { max: 15 });

// scroll reveal animation
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .dev', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });

srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });

srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

srtop.reveal('.education .box', { interval: 200 });

srtop.reveal('.work .box', { interval: 200 });

srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
