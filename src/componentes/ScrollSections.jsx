export default function ScrollSection(id) {
    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
    });
}