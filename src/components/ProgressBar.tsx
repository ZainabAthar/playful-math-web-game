
interface ProgressBarProps {
  progress: number;
  className?: string;
}

const ProgressBar = ({ progress, className = "" }: ProgressBarProps) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <div
        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
    </div>
  );
};

export default ProgressBar;
