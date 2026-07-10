import { motion } from "framer-motion";

import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import { socialLinks } from "../../constants/socialLinks";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-sky-400/10 blur-[120px]" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
            Software Engineer
          </p>

          <h1 className="font-heading text-[clamp(4rem,12vw,9rem)] font-bold leading-[0.9] tracking-tight text-white">
            AVISHKA
            <br />
            INDUMINI
            <br />
            WEERASINGHE
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
            Building digital experiences through clean code and thoughtful
            design.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">View Selected Work</Button>
            <Button href="#" variant="secondary">
              Download Resume
            </Button>
          </div>

          <nav
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2"
            aria-label="Social links"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;