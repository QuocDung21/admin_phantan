import slugify from "slugify";
import { db } from "../Config/Config";
import firebase from "firebase";
import { toast } from "react-toastify";

export const updateProduct = (productId, updatedData) => {
  db.collection("Products")
    .doc(productId)
    .update(updatedData)
    .then(() => {
      alert("Product updated successfully");
    })
    .catch((err) => {
      alert("Error updating product:", err);
    });
};

export const deleteProduct = (productId) => {
  db.collection("Products")
    .doc(productId)
    .delete()
    .then(() => {
      alert("Product deleted successfully");
    })
    .catch((err) => {
      alert("Error deleting product:", err);
    });
};

export const getAllProducts = () => {
  db.collection("Products")
    .get()
    .then((querySnapshot) => {
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({
          ProductID: doc.id,
          ProductName: doc.data().ProductName,
          ProductPrice: doc.data().ProductPrice,
          ProductImg: doc.data().ProductImg,
        });
      });
      this.setState({ products });
    })
    .catch((error) => {
      console.error("Error getting products: ", error);
    });
};
// Brands
export const addBrand = (title) => {
  const slug = slugify(title, { lower: true });
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();

  const brand = {
    title,
    slug,
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  db.collection("Brands")
    .add(brand)
    .then((docRef) => {
      console.log("Brand added with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding brand: ", error);
    });
};

// Xóa brand dựa trên ID
export const deleteBrand = (brandId) => {
  db.collection("Brands")
    .doc(brandId)
    .delete()
    .then(() => {
      toast("Brand deleted successfully");
    })
    .catch((error) => {
      toast("Error deleting brand error");
    });
};

// Cập nhật brand dựa trên ID và thông tin cập nhật
export const updateBrand = (brandId, updatedData) => {
  db.collection("Brands")
    .doc(brandId)
    .update(updatedData)
    .then(() => {
      toast("Brand updated successfully");
    })
    .catch((error) => {
      toast("Error updating brand: ", error);
    });
};

export const getBrands = () => {
  db.collection("Brands")
    .get()
    .then((querySnapshot) => {
      const brands = [];
      querySnapshot.forEach((doc) => {
        brands.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      toast("Brands:", brands);
      return brands;
    })
    .catch((error) => {
      toast("Error getting brands: ", error);
    });
};

export const getBrandById = (brandId) => {
  db.collection("Brands")
    .doc(brandId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const brandData = doc.data();
        toast("Brand ne:", brandData);
        // Sử dụng dữ liệu brand hoặc thực hiện các thao tác khác với nó
      } else {
        toast("No brand found with the given ID");
      }
    })
    .catch((error) => {
      toast("Error getting brand by ID: ", error);
    });
};
