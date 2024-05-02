<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import ApiClient from "../../util/api";

    const api = new ApiClient();

    let path = $page.params.slug;
    let text = '';

    onMount(async (e) => {
        let res = await api.findByToken(path);  
        console.log(res.data);
        if(res.data){
            text = res.data.text;
        }

    });
</script>


<div>{text}</div>
