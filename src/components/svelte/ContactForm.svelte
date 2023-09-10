<script>
    let isLoading = false
    let isSubmitted = false
    let name = ''
    let email = ''
    let phone = ''
    let message = ''

    const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeiV6sjuRvCkSgrag_07CLe3hVpGg71fa_rPGPuCcIiZwR1-Q/formResponse?'

    const handleReset = () =>{
        name=email=phone=message = ''
    }

    const handleSubmit = async () =>{
        isLoading = true
        const url = `${baseUrl}&entry.315836634=${name}&entry.1758346657=${email}&entry.2136258045=${phone}&entry.1140873239=${message}`
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            mode: 'no-cors'
        };
        try {
            const response = await fetch(url, requestOptions);
            isSubmitted = true;
            setTimeout(()=> isSubmitted=false, 7000)
        } catch (error) {
            console.error(error);
        }
        isLoading = false
        handleReset()
    };
</script>


<form action="" class="mt-12 lg:mt-28 w-full flex items-center flex-col"  on:submit|preventDefault={handleSubmit}>
    <div class="w-full gap-8 flex max-lg:flex-col">
      <input
        class="focus-within:outline-none w-full bg-transparent border-b-4 px-4 py-2"
        name="name"
        placeholder="Name *"
        type="text"
        required
        bind:value={name}
      />
      <input
        class="focus-within:outline-none w-full bg-transparent border-b-4 px-4 py-2"
        name="email"
        placeholder="Email *"
        type="email"
        required
        bind:value={email}
      />
      <input
        class="focus-within:outline-none w-full bg-transparent border-b-4 px-4 py-2"
        name="phone"
        placeholder="Phone *"
        type="text"
        required
        bind:value={phone}
      />
    </div>
    <textarea
      class="resize-none mt-8 focus-within:outline-none w-full bg-transparent border-b-4 px-4 py-2"
      name="message"
      placeholder="Message *"
      rows="7"
      required
      bind:value={message}
    ></textarea>
    <button class="hover:scale-90 bg-black text-white border border-black px-6 py-3 w-fit transition-all duration-300 rounded-md mt-12 flex items-center gap-1 cursor-pointer group" type="submit">
        <span>
            Submit
        </span>
        {#if isLoading}
            <div class="w-5 h-5 flex justify-center items-center">
                <div class="flex h-5 w-5 items-center justify-center">
                <div class="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-neutral-900 via-neutral-600 to-neutral-200 animate-spin">
                    <div class="h-3 w-3 rounded-full bg-black"></div>
                </div>
                </div>
            </div>
        {/if}
    </button>
    {#if isSubmitted}
        <span class="mt-4 text-sm text-center">
            We've received your submission. Thanks for reaching out to us.
        </span>
    {/if}
  </form>

