class User {
    skills: string[];

    addSkill(skill: string): void
    addSkill(skills: string[]): void
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills === "string") {
            this.skills.push(skillOrSkills)
        } else {
            this.skills.concat(skillOrSkills)
        }
    }
}

function run(distance: string): string
function run(distance: number): number
function run(distance: number | string): number | string {
    if (typeof distance ==="number"){
        return 3
    } else return ""
}

run()