import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { db } from "../../firebase";
import ProductDialog from './ProductDialog';
import { getDocs, doc,deleteDoc,setDoc,addDoc, collection,query, where, } from "firebase/firestore";
import Stack from '@mui/material/Stack';
import RemoveModal from './RemoveModal';
// import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

   
 
const ClientProducts = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [removeData,setRemoveData]= useState("")
  const handleOpenModal = () => setOpenModal(true);
  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleCloseDialog = () => setOpenDialog(false);
  const [data, setData] = useState({ PID: "", PName: "" });
  const ProdRef = collection(db, "products");
  const [list, setList] = useState([]);

  const AddProd=()=>{
    addDoc(ProdRef, {
      id: data['PID'],
      name: data['PName'],
    })
      .then(() => {
        handleCloseDialog();
      })
      .catch(() => {
        alert("Cannot disable uid");
      });
    
  }
  const RemoveProd=async()=>{
    const q = query(collection(db, "products"), where("id", "==", removeData));
    const querySnapshot = await  getDocs(q);
    var DelID;
    querySnapshot.forEach((doc) => {
     DelID=doc.id
      
    });
    // console.log(DelID)

    await deleteDoc(doc(db,"products", `${DelID}`));
    handleCloseModal();
  }


  var newList = [];

  const fetchList = async () => {
    const data = await getDocs(collection(db, "products"));

    data.docs.forEach((item) => {
      newList.push([
        item.data().id,
        item.data().name,
      ]);
    });
    setList(newList);
  };


  useEffect(() => {
    fetchList();
  });
  

  return (
    <>
   <Container>
   <Stack spacing={2} direction="row">
    <Button variant="contained" onClick={handleOpenDialog}>Add Product</Button>
    
      <Button variant="contained" onClick={handleOpenModal}>Remove Product</Button>
      </Stack>
      <ProductDialog
    open={openDialog}
    setOpen={setOpenDialog}
    setData={setData}
    // setAction={setAction}
    // action={action}
    AddProd={AddProd}
    />
    <RemoveModal
    open={openModal}
    setOpen={setOpenModal}
    setData={setRemoveData}
    // setAction={setAction}
    // action={action}
    RemoveProd={RemoveProd}
    
    />

   <MUIDataTable
   title="Product List"
    data={list}
    columns={["PID", "Name"]}
    // options={{
    //   filterType: "dropdown",
    //         }}
          />
      
    </Container>
    </>
  )
}

export default ClientProducts