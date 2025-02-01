// components/BackButton.tsx
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface BackButtonProps {
  className?: string; 
}

const BackButton: React.FC<BackButtonProps> = ({ className }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back(); 
  };

  return (
    <button
      onClick={handleBackClick}
      className={`flex items-center space-x-2 py-8 px-16 ${className}`}
    >
      <ArrowLeft size={24} /> 
      <span>Back</span>
    </button>
  );
};

export default BackButton;
