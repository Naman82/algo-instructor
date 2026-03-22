const chat = document.getElementById("chat");
const input = document.getElementById("input");
const typing = document.getElementById("typing");
const sendBtn = document.getElementById("sendBtn");

function addMsg(text, type){
    const div = document.createElement("div");
    div.className = "msg " + type;

    const bubble = document.createElement("div");
    bubble.className = "bubble";

    bubble.innerHTML = text.replace(/\n/g,"<br>").replace(/`(.*?)`/g,"<code>$1</code>");

    div.appendChild(bubble);
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

async function send(){

    console.log("SEND FUNCTION TRIGGERED");
    const text = input.value.trim();
    if(!text) return;

    sendBtn.disabled = true;
    input.disabled = true;

    addMsg(text,"user");
    input.value="";
    typing.style.display="block";

    try{
        const res = await fetch("/api/chat",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                contents: [{ parts: [{ text }] }],
                systemInstruction: {
                    parts: [{
                        text: `You are a Data Structures and Algorithms Instructor.
                                Rules:
                                - Only answer DSA questions
                                - Explain simply
                                - Give examples
                                - Provide code
                                - Include complexity`
                    }]
                }
            })
        });

        const data = await res.json();
        const reply = data.candidates[0].content.parts[0].text;

        addMsg(reply,"ai");

    } catch {
        addMsg("Server error. Try again.","ai");
    }

    typing.style.display="none";
    sendBtn.disabled = false;
    input.disabled = false;
    input.focus(); 
}

sendBtn.addEventListener("click", send);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        send();
    }
});