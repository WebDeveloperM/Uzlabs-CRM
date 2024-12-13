export function convertTimeFormat(timeString: string) {
    // Kiruvchi vaqt stringini vergul orqali bo'lib olish
    const times = timeString.split(",");

    // Har bir vaqtni ":" orqali bo'lib olish va "-" bilan birlashtirish
    const formattedTimes = times.map(time => {
        const [hours, minutes, _] = time.split(":");
        return `${hours}:${minutes}`;
    });

    // Formatlangan vaqtni "-" bilan birlashtirish
    return formattedTimes.join("-");
}


