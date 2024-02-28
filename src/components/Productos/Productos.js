import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore();

const mostrarProductos = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'Productos'));
        
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            // Verifica que los datos tengan las claves 'nombre' y 'precio'
            if (data.nombre && data.precio && data.stock && data.img) {
                const productoElement = document.createElement('div');
                productoElement.textContent = `Nombre: ${data.nombre}, Precio: ${data.precio}, Stock: ${data.stock}, img: ${data.img}`;
                document.body.appendChild(productoElement);
            } else {
               // console.error('Documento con estructura incorrecta:', doc.id, data);
            }
        });
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
};

mostrarProductos();


