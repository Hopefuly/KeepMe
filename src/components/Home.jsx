import React, { useEffect } from "react";

// Merupakan component untuk menampilkan halaman home dan menggunakan useEffect sebagai lifecycle method
function Home() {
  useEffect(() => {
    alert("Selamat datang di halaman utama KeepMe App");
  });
  return <div className="home">Official Page of KeepMe</div>;
}

export default Home;
