const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-display text-xl font-bold text-primary">qist</span>
            <span className="text-sm text-muted-foreground">Contact us at <a href="mailto:info@qist.co.uk" className="text-primary hover:underline">info@qist.co.uk</a></span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Qist. Ethical payments for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
