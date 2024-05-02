<script>
    import { _, locale, waitLocale } from "svelte-i18n";
    export let locales = [];
    function changeLocale(l) {
        // Set the current locale to en-US
        console.log(`locale change:${l}`);
        locale.set(l);
        // This is a store, so we can subscribe to its changes
        locale.subscribe(() => console.log("locale change"));
    }
</script>

<div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start"></div>
    <div class="navbar-center">
        <a class="btn btn-ghost normal-case text-xl" href="/"
            >Copy To {$_("hello world")}</a
        >
    </div>
    <div class="navbar-end">
        <div title="Change Language" class="dropdown dropdown-end">
            <div
                tabindex="0"
                role="button"
                class="btn btn-ghost"
                aria-label="Language"
            >
                <span class="material-icons"> translate </span>
            </div>
            <div
                class="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 max-h-[calc(100vh-10rem)] w-56 border border-white/5 shadow-2xl outline outline-1 outline-black/5"
            >
                <ul class="menu menu-sm gap-1 w-56">
                    {#each Object.entries(locales) as [locale, language]}
                        <li>
                            <button
                                type="button"
                                on:click={changeLocale(locale)}
                                ><span
                                    class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50"
                                    >{locale}</span
                                >
                                <span class="font-[sans-serif]">{language}</span
                                >
                            </button>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</div>
