import Dialog from '@mui/material/Dialog';

type Props = {
  children: React.ReactNode;
  onCancel: () => void;
};

export default function Modal({ children, onCancel }: Props) {
  return (
    <>
      <Dialog open={true}>{children}</Dialog>
    </>
  );
}
