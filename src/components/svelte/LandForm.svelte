<script>
    let isLoading = false
    let isSubmitted = false
    let name = ''
    let email = ''
    let phone = ''
    let landType = ''
    let location = ''
    let landSize = ''


    // https://docs.google.com/forms/d/e/1FAIpQLSc5Gn-vmWEeVBWzZiDf9EJp7ev5eh5Ha2Zk76MXhS22C5N9rQ/viewform?usp=pp_url&entry.1467145437=Gavin&entry.1483725286=email@email.com&entry.709657836=8888253992&entry.887597513=Hilly&entry.674208994=Vascu&entry.900513713=2acres

    const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc5Gn-vmWEeVBWzZiDf9EJp7ev5eh5Ha2Zk76MXhS22C5N9rQ/formResponse?'

    const handleReset = () =>{
        name=email=phone=landType=location=landSize = ''
    }

    const handleSubmit = async () =>{
        isLoading = true
        const url = `${baseUrl}&entry.1467145437=${name}&entry.1483725286=${email}&entry.709657836=${phone}&entry.887597513=${landType}&entry.674208994=${location}&entry.900513713=${landSize}`
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


<form
    on:submit|preventDefault={handleSubmit}
    action=""
    class="mt-12 lg:mt-28 w-full flex items-center flex-col gap-8"
>
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
    </div>
    <div class="w-full gap-8 flex max-lg:flex-col">
    <input
        class="focus-within:outline-none w-full bg-transparent border-b-4 px-4 py-2"
        name="phone"
        placeholder="Phone *"
        type="text"
        required
        bind:value={phone}
    />
    <input
        class="focus-within:outline-none w-full bg-transparent border-b-4 px-4 py-2"
        name="type"
        placeholder="Land Type"
        type="text"
        bind:value={landType}
    />
    </div>

    <div class="w-full gap-8 flex max-lg:flex-col">
    <input
        class="focus-within:outline-none w-full bg-transparent border-b-4 px-4 py-2"
        name="location"
        placeholder="Prefered Location"
        type="text"
        bind:value={location}
    />
    <input
        class="focus-within:outline-none w-full bg-transparent border-b-4 px-4 py-2"
        name="size"
        placeholder="Land Size"
        type="text"
        bind:value={landSize}
    />
    </div>

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