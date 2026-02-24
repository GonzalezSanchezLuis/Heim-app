const URL_API =  "http://localhost:8080/api/v1/auth/reset-password";
document.getElementById("reset-form").addEventListener("submit", async (e) =>{
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    console.log("DEBUG - URL completa:", window.location.href);
    console.log("DEBUG - Parámetros:", window.location.search);
    console.log("DEBUG - Token encontrado:", token);

    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value
    const messageElement = document.getElementById("message")
    messageElement.style.display = "block";

    if (password != confirmPassword) {
        messageElement.innerText = "Las contraseñas no coinciden.";
        messageElement.style.color = "red";
        return;
    }

 

    if (!token) {
        messageElement.innerText = "Token no valido";
        return;
    }

    try {
        const response = await fetch(URL_API,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                token:token,
                newPassword:password
            })

        });

        const data = await response.json();
        if(response.ok){
            messageElement.innerText = "¡Contraseña actualizada con éxito!";
            messageElement.style.color = "green"
           setTimeout(() => window.location.href = "index.html", 2000);
        }else{
            messageElement.innerText = data.message || "No se pudo actualizar";
             messageElement.style.color = "red";
            
        }
    } catch (error) {
        console.error("Error en la conexión", error);
        messageElement.innerText = "Error de conexión.";
    }

})



