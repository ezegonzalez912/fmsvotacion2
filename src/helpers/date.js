export const date = () => {
    const fecha = new Date();
    const año = fecha.getFullYear();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const fechaString = `${dia}/${mes}/${año}`
    return fechaString
} 