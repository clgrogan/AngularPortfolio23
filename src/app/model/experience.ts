import { Skills } from "./skills";
import { TechStack } from "./techstack";



export interface Experience {
    id: number;
    organization: string;
    role: string;
    description: string;
    techStack: TechStack[];
    skills: Skills[];
}
