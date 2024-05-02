<script>
    let languages = [{}];
</script>

<div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start"></div>
    <div class="navbar-center">
        <a class="btn btn-ghost normal-case text-xl" href="/">Copy To</a>
    </div>
    <div class="navbar-end">
        <div title="Change Language" class="dropdown dropdown-end">
            <div
                tabindex="0"
                role="button"
                class="btn btn-ghost"
                aria-label="Language"
            >
            <span class="material-icons">
                translate
                </span>
            </div>
            <div            
                class="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 max-h-[calc(100vh-10rem)] w-56  border border-white/5 shadow-2xl outline outline-1 outline-black/5"
            >
                <ul class="menu menu-sm gap-1 w-56">
                    <li>
                        <button class=""
                            ><span
                                class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50"
                                >EN</span
                            > <span class="font-[sans-serif]">English</span>
                        </button>
                    </li>
                    <li>
                        <button
                            ><span
                                class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50"
                                >JA</span
                            > <span class="font-[sans-serif]">日本語</span>
                        </button>
                    </li>
                    <li>
                        <button
                            ><span
                                class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50"
                                >KO</span
                            > <span class="font-[sans-serif]">한국어</span>
                        </button>
                    </li>
                    <li>
                        <button
                            ><span
                                class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50"
                                >RU</span
                            > <span class="font-[sans-serif]">Русский</span>
                        </button>
                    </li>
                    <li>
                        <button class="active"
                            ><span
                                class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50"
                                >ZH</span
                            > <span class="font-[sans-serif]">中文</span>
                        </button>
                    </li>
                    <li>
                        <button
                            ><span
                                class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50"
                                >ZH</span
                            >
                            <span class="font-[sans-serif]">繁體中文</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
