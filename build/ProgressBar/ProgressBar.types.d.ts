export interface IProgressBarProps {
    score: number;
    label?: string;
    progressWidth?: number;
    hideText?: boolean;
    darkTheme?: boolean;
    status: string;
    barShape?: string;
    primaryColor?: string;
    secondaryColor?: string;
    disableGlow?: boolean;
    className?: string;
}
