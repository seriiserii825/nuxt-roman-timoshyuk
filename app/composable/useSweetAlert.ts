export default function useSweetAlert(
  icon: "success" | "error" | "warning" | "info" | "question",
  title: string,
  text = ""
) {
  const { $swal } = useNuxtApp();

  return $swal.fire({
    toast: true,
    position: "bottom-end",
    icon,
    title,
    text,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
}
