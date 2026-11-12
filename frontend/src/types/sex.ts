export type Sex = "men" | "women";

export function sexToHumanString(sex: Sex): string
{
    return sex === "men" ? "Mężczyzna" : "Kobieta";
}