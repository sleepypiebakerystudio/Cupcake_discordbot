document.getElementById("embedForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    locales: localState,
    webhookTitle: document.getElementById("webhookTitle").value.trim(),
    color: document.getElementById("color").value,
    image: document.getElementById("image").value.trim(),
    url: document.getElementById("url").value.trim(),
    channelId: document.getElementById("channelId").value.trim(),
    Embedkey: document.getElementById("Embedkey").value.trim(),
    author: {
      name: document.getElementById("author_name").value.trim(),
      icon_url: document.getElementById("author_icon").value.trim(),
      url: document.getElementById("author_url").value.trim()
    },

    thumbnail: {
      url: document.getElementById("thumbnail").value.trim()
    }
  };

  console.log("📤 Gönderilen DATA:", formData);

  try {
    const res = await fetch("http://localhost:4000/api/add-embed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "Sunucu hatası");

    alert("Embed başarıyla gönderildi 🍰!");
  } catch (err) {
    console.error("❌ Renderer Hatası:", err);
    alert("Bir hata oluştu! Konsolu kontrol et 😭");
  }
});
