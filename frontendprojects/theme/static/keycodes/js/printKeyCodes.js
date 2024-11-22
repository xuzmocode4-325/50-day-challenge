const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    console.log(e)
    insert.innerHTML = `
       <div id="key-1" class="border border-[#999999] bg-[#eee]
        relative shadow flex flex-col p-4 m-10 shadow-gray-600
        ">
        ${e.key === ' ' ? 'Space': e.key}
        <small class="absolute -top-6 left-0 text-center w-full
        text-[#555]">event.key</small>
    </div>
    <div id="key-2" class="border border-[#999999] bg-[#eee]
        relative shadow flex flex-col p-4 m-10 shadow-gray-600
        ">
        ${e.keyCode}
        <small class="absolute -top-6 left-0 text-center w-full
        text-[#555]">event.keycCode</small>

    </div>
    <div id="key-3" class="border border-[#999999] bg-[#eee]
        relative shadow flex flex-col p-4 m-10 shadow-gray-600
        ">
        ${e.code}
        <small class="absolute -top-6 left-0 text-center w-full 
        text-[#555]">event.code</small>
    </div>
    <div id="key-4" class="border-b border-[#999999]
    relative flex flex-col p-4 m-10 shadow-gray-600
    ">
    Press any key to get the keyCode 
        <small class="absolute -top-6 left-0 text-center w-full 
        text-[#555] flex flex-row justify-between">
            <p>Shift: ${e.shiftKey ? '<span class="text-bold">True</span>' : e.shiftKey} </p>
            <p>Alt:  ${e.altKey ? '<span class="text-bold">True</span>' : e.altKey} </p>
            <p>Cntrl: ${e.ctrlKey ? '<span class="text-bold">True</span>' : e.ctrlKey}</p>
        </small>
    </div>
    `
})