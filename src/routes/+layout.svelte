<script>
    import "../util/i18n";
    import "../app.css";
    import { locale, waitLocale } from 'svelte-i18n'
    import Header from "../components/Header.svelte";

    const locales = {
        en: "English",
        zh: "简体中文",
        jp: "日本語",
        kr: "한국어",
        ru: "Русский",
    };


</script>

<div>
    <Header {locales}></Header>

    <main>
        <div class="container max-w-2xl mx-auto mt-10 min-h-screen">
            <slot />
        </div>
    </main>
</div>
