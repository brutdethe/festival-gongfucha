(function() {

    // Detect user language and redirect, if first time, to the right page ----------------
    try {
        var lang_user;

        lang_user = localStorage.getItem("lang_user");
        if (!lang_user) {
            var lang_user = (window.navigator.userLanguage || (window.navigator.languages.length > 0 && window.navigator.languages[0]) || window.navigator.language).slice(0, 2);
            localStorage.setItem("lang_user", lang_user);
            var lang_site = document.getElementsByTagName('html')[0].lang;
            if (lang_user != lang_site) {
                window.location = document.querySelector('[rel="alternate"]').href;
            }
        }
    } catch (e) {
        console.log("No localstorage, no lang redirection.")
    }

    // Lazyload ---------------------------------------------------------------------------
    var lozadObserver = lozad('.lozad', {
        load: function(el) {
            if (el.tagName == "IMG") {
                el.setAttribute("decoding", "async");
            }
            if (el.dataset.src)
                el.src = el.dataset.src;
            if (el.dataset.srcset)
                el.srcset = el.dataset.srcset;
            el.onload = function() {
                el.classList.add('fade')
            }
        }
    });
    lozadObserver.observe();
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.querySelectorAll('.lozad[class^="banner-"]:not([data-loaded])').forEach(function(element) {
                lozadObserver.triggerLoad(element);
            });
        }, 4000);
    });

    // Toggle class -----------------------------------------------------------------------
    let toggleClassPrefix = ""; // Prefix should end by hyphen

    var retrieveTargets = function(element) {
        if (element.hasAttribute('data-' + toggleClassPrefix + 'toggle-target-all'))
            return document.querySelectorAll(element.getAttribute('data-' + toggleClassPrefix + 'toggle-target-all'));
        else if (element.hasAttribute('data-' + toggleClassPrefix + 'toggle-target-parent'))
            return element.parentElement.querySelectorAll(element.getAttribute('data-' + toggleClassPrefix + 'toggle-target-parent'));
        else if (element.hasAttribute('data-' + toggleClassPrefix + 'toggle-target-self'))
            return element.querySelectorAll(element.getAttribute('data-' + toggleClassPrefix + 'toggle-target-self'));
        return [];
    };

    var toggleClass = function(element, className) {
        if (!element.hasAttribute('data-' + toggleClassPrefix + 'toggle-target-only'))
            element.classList.toggle(className);

        if (element.hasAttribute('aria-expanded'))
            element.setAttribute('aria-expanded', element.isActive);

        if (element.hasAttribute('aria-selected'))
            element.setAttribute('aria-selected', element.isActive);

        let targetElements = retrieveTargets(element);
        for (var i = 0; i < targetElements.length; i++) {
            targetElements[i].classList.toggle(className);
        }
    };

    var blurEventHandler = function(event) {
        let element = event.target;
        element.isActive = !element.isActive;

        toggleClass(element, element.getAttribute('data-' + toggleClassPrefix + 'toggle-class'));

        element.removeEventListener('blur', blurEventHandler, false);
    };

    var manageToggle = function(element) {
        element.isActive = !element.isActive;

        toggleClass(element, element.getAttribute('data-' + toggleClassPrefix + 'toggle-class'));

        if (element.hasAttribute('data-' + toggleClassPrefix + 'toggle-focus-out')) {
            if (element.isActive)
                element.addEventListener('blur', blurEventHandler, false);
            else
                element.removeEventListener('blur', blurEventHandler, false);
        }
    };

    [...document.querySelectorAll('[data-' + toggleClassPrefix + 'toggle-class]')].forEach(function(trigger) {
        trigger.addEventListener(trigger.getAttribute('data-' + toggleClassPrefix + 'toggle-on-event') || 'click', function(event) {
            event.preventDefault();
            manageToggle(trigger);
        }, false);
    });

    var triggerEscElements = [...document.querySelectorAll('[data-' + toggleClassPrefix + 'toggle-class][data-' + toggleClassPrefix + 'toggle-escape-key]')];
    document.onkeyup = function(event) {
        event = event || window.event;
        let isEscape = false;

        if ('key' in event)
            isEscape = (event.key == 'Escape' || event.key == 'Esc');
        else
            isEscape = (event.keyCode == 27);

        if (isEscape) {
            triggerEscElements.forEach(function(trigger) {
                if (trigger.isActive) manageToggle(trigger);
            });
        }
    };

    // Smooth scroll ----------------------------------------------------------------------
    function loadScript(url, callback) {
        var script = document.createElement('script'),
            loaded = false;

        script.setAttribute('src', url);
        script.onreadystatechange = script.onload = function() {
            if (!loaded && callback) {
                callback();
                loaded = true;
            }
        };

        document.head.appendChild(script);
    }

    function initSmoothScroll() {
        loadScript(
            'https://cdn.rawgit.com/cferdinandi/smooth-scroll/master/dist/js/smooth-scroll.min.js',
            function() {
                var scroll = new SmoothScroll("a[href^='#']:not([role='button'])", {
                    speed: 1000,
                    easing: 'easeInOutQuint'
                });
            }
        );
    }

    document.addEventListener('DOMContentLoaded', initSmoothScroll);

})();