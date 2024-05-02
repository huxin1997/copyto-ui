<script>
    import { onMount } from "svelte";
    import QRCode from "qrcode-generator";
    import ApiClient from "../util/api.js";
    import copy from 'copy-to-clipboard';

    const api = new ApiClient("/api");

    let url = "https://copyto.io/";
    let text = "";
    let qrCodeUrl = "";
    let token = "";
    let btnDisabled = true;

    function generateQRCode() {
        const qr = QRCode(0, "M");
        qr.addData(text);
        qr.make();

        const qrCodeImage = qr.createDataURL(4);
        qrCodeUrl = qrCodeImage;
    }


    async function done() {
        let res = await api.create({ text: text });
        url = `https://copyto.io/${res.data}`;
        token = res.data;
        generateQRCode();
        btnDisabled = false;
    }

    function handleInput(event) {
        text = event.target.value;
    }

    function generateRandomString(length) {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * characters.length),
            );
        }
        return result;
    }

    function onCopyURL(){
        copy(url);
    }

</script>

<div class="card bg-slate-900 shadow-lg">
    <div class="p-3 flex justify-between items-center">
        <a class="link link-hover text-white" href={`/` + token}
            ><span class="material-icons align-middle text-sm pr-2">
                share
            </span>
            {url}</a
        >
        <div class="flex items-center gap-1">
            <button
                class="btn btn-sm btn-neutral {btnDisabled    ? 'btn-disabled' : ''}"
                on:click={onCopyURL}
            >
                <span class="material-icons text-lg">content_copy</span>复制
            </button>

            <div class="dropdown dropdown-hover">
                <div
                    tabindex="0"
                    role="button"
                    class="m-1 btn btn-sm btn-neutral {btnDisabled    ? 'btn-disabled' : ''}"
                >
                    <span class="material-icons text-lg">
                        qr_code_scanner
                    </span>二维码
                </div>
                <div
                    
                    class="skeleton w-36 h-36 dropdown-content z-[1] menu shadow bg-base-100 rounded-box"
                >
                    <img
                        class="min-h-full min-w-full"
                        src={qrCodeUrl}
                        alt="QR Code"
                    />
                </div>
            </div>

            <div
                class="tooltip"
                data-tip="curl https://copyto.io/{token} > copyto.txt"
            >
                <button class="btn btn-sm btn-neutral {btnDisabled    ? 'btn-disabled' : ''}" 
                 on:click={copy(`curl https://copyto.io/${token} > copyto.txt`)}
                >
                    <span class="material-icons text-lg"> terminal </span>终端
                </button>
            </div>
        </div>
    </div>

    <div class="flex justify-center relative bg-white">
        <button
            class="btn btn-success btn-circle absolute bottom-3 right-3 shadow-lg {text.length==0?'btn-disabled':''}"
            on:click={done}
        >
            <span class="material-icons text-white">done</span>
            <!-- <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 12l5 5l10 -10" /></svg> -->
        </button>

        <p class="text-xs text-stone-400 absolute bottom-3 left-3">
            长度: {text.length} / 100
        </p>

        <textarea
            class="textarea min-w-full bg-white focus:outline-none"
            rows="10"
            bind:value={text}
            placeholder="Hello World!"
        ></textarea>
    </div>
</div>

<div class="stats shadow mt-2">
    <div class="stat">
        <div class="stat-title">🔗访问次数</div>
        <div class="stat-value">1,278</div>
        <div class="stat-desc">21% more than last month</div>
    </div>
</div>
