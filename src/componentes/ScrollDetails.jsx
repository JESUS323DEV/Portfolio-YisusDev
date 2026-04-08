import { useEffect } from "react";

export default function ScrollDetails(detailsRefs) {
    useEffect(() => {
        const details = detailsRefs.current;
        const cleanups = [];

        details.forEach(det => {
            if (!det) return;

            // Abrir por defecto
            det.open = true;

            const onToggle = () => {
                if (det.open && !det.dataset.scrolled) {
                    const summary = det.querySelector("summary");
                    const header = document.querySelector(".cont-header");
                    const offset = header ? header.offsetHeight : 0;
                    const y = summary.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                    det.dataset.scrolled = "true";
                }
                if (!det.open) {
                    delete det.dataset.scrolled;
                }
            };

            det.addEventListener("toggle", onToggle);
            cleanups.push(() => det.removeEventListener("toggle", onToggle));
        });

        return () => cleanups.forEach(fn => fn());
    }, [detailsRefs]);
}