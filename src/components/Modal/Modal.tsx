import Dialog from '@mui/material/Dialog';

type Props = {
  children: React.ReactNode;
};

export default function Modal({ children }: Props) {
  return (
    <>
      <Dialog open={true}>{children}</Dialog>
    </>
  );
}
