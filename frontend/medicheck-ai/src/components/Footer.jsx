
function Footer() {
    return (
      <footer className="mt-20 border-t border-orange-100 bg-white px-8 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-sm text-stone-500">
          <p>© {new Date().getFullYear()} MediCheck AI</p>
          <p>Educational use only · Not a medical diagnosis</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  