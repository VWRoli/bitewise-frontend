import Typography from '@/app/components/Typography';

interface IProps {
  label: string;
  info?: string;
}
const InfoBox = ({ label, info }: IProps) => {
  return (
    <article>
      <Typography variant="p">{label}</Typography>
      <Typography variant="large">{info || '-'}</Typography>
    </article>
  );
};

export default InfoBox;
