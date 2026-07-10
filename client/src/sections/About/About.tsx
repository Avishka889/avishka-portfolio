import { motion } from "framer-motion";

import Container from "../../components/ui/Container";
import { spacing } from "../../theme/spacing";

const capabilities = [
  { value: "3+", label: "Major projects" },
  { value: "Web", label: "Full-stack development" },
  { value: "Mobile", label: "React Native applications" },
] as const;

const About = () => {
  return (
    <section id="about" className={`relative overflow-hidden ${spacing.section}`}>
      <div className="absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="flex h-full items-center justify-center">
                <span className="text-sm font-medium text-slate-500">
                  Professional photo
                </span>
              </div>
            </div>

            <div className="absolute -bottom-5 right-0 rounded-xl border border-white/10 bg-slate-950/90 px-5 py-4 shadow-lg backdrop-blur-xl">
              <p className="text-sm font-semibold text-white">
                Available for opportunities
              </p>
              <p className="mt-1 text-sm text-slate-400">Sri Lanka</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
              About
            </p>

            <h2 className="font-heading text-[clamp(2rem,5vw,3rem)] font-bold leading-tight tracking-tight text-white">
              The developer behind the code.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-slate-400 md:text-lg">
              <p>
                I am a final-year Software Engineering undergraduate with
                hands-on experience building modern web and mobile applications.
              </p>
              <p>
                I enjoy transforming real-world requirements into reliable,
                user-focused software while continuously improving my skills in
                full-stack development, clean architecture and interface design.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {capabilities.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <p className="font-heading text-xl font-bold text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
