export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: "beforeChildren" }
  }
}

export const fadeUp = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export const subtleHover = {
  hover: { scale: 1.03, transition: { duration: 0.18 } },
  tap: { scale: 0.98 }
}
