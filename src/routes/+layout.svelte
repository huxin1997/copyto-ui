<script>
    import "../app.css";
    import '../util/i18n'
    import Header from "../components/Header.svelte";
    import { t } from "@i18n-pro/svelte";

    const locales = {
        en: "English",
        zh: "简体中文",
        cht: "繁體中文",
        jp: "日本語",
    };

</script>

<div>
    <Header></Header>
    <div>
        {$t("hello world")}
        {$t('ok')}
    </div>

    <main>
        <div class="container max-w-2xl mx-auto mt-10 min-h-screen">
            <slot />
        </div>
    </main>
</div>
