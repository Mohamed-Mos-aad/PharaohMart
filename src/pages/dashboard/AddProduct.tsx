// ** Style
import style from "../../style/pages/dashboard/addProduct.module.css";
// ** components
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import InputElement from "../../components/ui/InputElement";
import DropMenuElement from "../../components/ui/DropMenuElement";
import UploadPhotos from "../../components/ui/UploadPhotos";
import ToggleElement from "../../components/ui/ToggleElement";
import TextAreaInputElement from "../../components/ui/TextAreaInputElement";
// ** Hooks && Tools
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// ** Actions
import { getCategoriesAction } from "../../api/data/categoriesActions";
import { addTagAction, findTagByName } from "../../api/data/tagsActions";
import { addProductAction } from "../../api/data/productActions";
// ** Interfaces
import type { ICategory, INewProduct } from "../../interfaces";
// ** Constants
import { LENGHT_UNIT, WEIGHT_UNIT } from "../../constant";
// ** Utils
import { usePharaohMartData } from "../../hooks/usePharaoMartData";
import { successMsg } from "../../app/features/messagePop/messagePopSlice";



export default function AddProduct() {
  // ** Defaults
  const { userData } = usePharaohMartData();
  const dispatch = useDispatch();
  const now = new Date();
  const defaultData = {
    owner: userData?.id?? 0,
    name: "",
    description: "",
    categories: [],
    tags: [],
    price: 0,
    salePrice: 0,
    stockQuantity: 0,
    productSKU: "",
    lowStockAlert: 0,
    weight: 0,
    length: 0,
    width: 0,
    unitWeight: "",
    unitDimension: "",
    images: [],
    mainImage: null,
    isPublished: false,
    publishDate: now.toISOString().split("T")[0],
    publishTime: now.toTimeString().split(" ")[0],
  };

  // ** States
  const [productData, setProductData] = useState<INewProduct>(defaultData);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [discount, setDiscount] = useState<number>(0);

  // ** Handlers
  const inputValueChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.currentTarget;
    let finalValue: string | string[] | number = value;
    if (id === "tags") {
      finalValue = value.split(",").map((tag) => tag.trim());
    }
    setProductData((prev) => ({
      ...prev,
      [id]: finalValue,
    }));
  };
  const addProductHandler = async () => {
    if (!productData.isPublished) return;
    try {
      const tagIds: string[] = [];
      if (productData.tags && productData.tags.length > 0) {
        for (const tagName of productData.tags) {
          const tagStr =
            typeof tagName === "string" ? tagName : String(tagName);

          if (!tagStr.trim()) continue;

          const existingTag = await findTagByName(tagStr.trim());

          if (existingTag) {
            tagIds.push(existingTag.id);
          } else {
            const newTag = await addTagAction(tagStr.trim());
            tagIds.push(newTag.data.id);
          }
        }
      }

      const productPayload = {
        ...productData,
        tags: tagIds,
      };
      await addProductAction(productPayload);
      setProductData(defaultData);
      dispatch(successMsg({message: "Product added successfully!"}))
    } catch (error) {
      console.log(error);
    }
  };

  // ** UseEffect
  useEffect(() => {
    const getdata = async () => {
      const result = await getCategoriesAction();
      setCategories(result.data);
    };

    getdata();
  }, []);
  useEffect(() => {
    setDiscount(
      Number(
        (
          ((productData.price - productData.salePrice!) / productData.price!) *
          100
        ).toFixed(2)
      )
    );
  }, [productData]);

  return (
    <>
      <div className="dashboard_container">
        <div className={style.add_product}>
          <DashboardHeader
            title="Add New Product"
            description="Provide detailed information about yourproduct to attract customers."
          />
          <h2>Product Images</h2>
          <UploadPhotos
            title="Drag and drop images here"
            description="Recommended dimensions: 1000x1000px. Supported formats: JPG, PNG. You can upload up to 5 images."
            quantity={5}
            onUpload={(photos) => {
              setProductData((prev) => ({
                ...prev,
                images: photos,
                mainImage: photos[0],
              }));
            }}
          />
          <section>
            <h2>Basic Information</h2>
            <InputElement
              error=""
              id="name"
              label="Product Title"
              value={productData.name}
              name="name"
              placeholder="Enter product name"
              type="text"
              onChange={inputValueChangeHandler}
            />
            <TextAreaInputElement
              id="description"
              label="Product Description"
              value={productData.description}
              name="description"
              placeholder="Enter product description"
              onChange={inputValueChangeHandler}
            />
          </section>
          <section>
            <h2>Category & Subcategory</h2>
            <div className={style.inputs_row}>
              <DropMenuElement
                title="Select a category"
                selections={categories.map((cat) => ({
                  id: cat.id,
                  title: cat.title,
                }))}
                onSelect={(itemSelected) => {
                  setProductData((prev) => ({
                    ...prev,
                    categories: [
                      ...(prev.categories || []),
                      itemSelected.id! - 1,
                    ],
                  }));
                }}
              />
              <DropMenuElement
                title="Select a subcategory"
                selections={categories.map((cat) => ({
                  id: cat.id,
                  title: cat.title,
                }))}
                onSelect={(itemSelected) => {
                  setProductData((prev) => ({
                    ...prev,
                    categories: [
                      ...(prev.categories || []),
                      itemSelected.id! - 1,
                    ],
                  }));
                }}
              />
            </div>
          </section>
          <section>
            <h2>Pricing</h2>
            <InputElement
              error=""
              id="price"
              label="Price"
              value={productData.price}
              name="price"
              placeholder="Enter the standard price"
              type="text"
              onChange={inputValueChangeHandler}
            />
            <InputElement
              error=""
              id="salePrice"
              label="Sale Price (Optional)"
              value={productData.salePrice!}
              name="salePrice"
              placeholder="Enter a discounted price"
              type="text"
              onChange={inputValueChangeHandler}
            />
            <span>Discount Percentage: {discount}%</span>
          </section>
          <section>
            <h2>Inventory</h2>
            <InputElement
              error=""
              id="stockQuantity"
              label="Stock Quantity"
              value={productData.stockQuantity!}
              name="stockQuantity"
              placeholder="Enter available stock"
              type="text"
              onChange={inputValueChangeHandler}
            />
            <InputElement
              error=""
              id="productSKU"
              label="SKU (Stock Keeping Unit)"
              value={productData.productSKU!}
              name="productSKU"
              placeholder="Enter product's unique identifier"
              type="text"
              onChange={inputValueChangeHandler}
            />
            <InputElement
              error=""
              id="lowStockAlert"
              label="Low Stock Alert (Optional)"
              value={productData.lowStockAlert!}
              name="lowStockAlert"
              placeholder="Set a threshold for low stock alerts"
              type="text"
              onChange={inputValueChangeHandler}
            />
          </section>
          {/* <section>
                        <h2>Variants (Optional)</h2>
                        <p>Add product variants such as size, color, or material. You can specify individual prices and stock quantities for each variant.</p>
                        <button>Add Variant</button>
                    </section> */}
          <section>
            <h2>Tags</h2>
            <InputElement
              error=""
              id="tags"
              label="Tags"
              value={productData.tags!}
              name="tags"
              placeholder="Add relevant tags or keywords to improve searchability"
              type="text"
              onChange={inputValueChangeHandler}
            />
            <span>Suggested tags: Trending, New Arrival, Best Seller</span>
          </section>
          <section>
            <h2>Shipping Information</h2>
            <InputElement
              error=""
              id="weight"
              label="Weight"
              value={productData.weight!}
              name="weight"
              placeholder="Enter product weight"
              type="text"
              onChange={inputValueChangeHandler}
            />
            <div className={style.inputs_row}>
              <InputElement
                error=""
                id="length"
                label="Length"
                value={productData.length!}
                name="length"
                placeholder="Enter length"
                type="text"
                onChange={inputValueChangeHandler}
              />
              <InputElement
                error=""
                id="width"
                label="Width"
                value={productData.width!}
                name="width"
                placeholder="Enter width"
                type="text"
                onChange={inputValueChangeHandler}
              />
            </div>
            <div className={style.inputs_row}>
              <DropMenuElement
                title="Select unit  (e.g.,  kg,  lbs)"
                selections={WEIGHT_UNIT}
                onSelect={(itemSelected) => {
                  setProductData((prev) => ({
                    ...prev,
                    unitWeight: itemSelected.title,
                  }));
                }}
              />
              <DropMenuElement
                title="Select  unit  (e.g.,  cm,  inches)"
                selections={LENGHT_UNIT}
                onSelect={(itemSelected) => {
                  setProductData((prev) => ({
                    ...prev,
                    unitDimension: itemSelected.title,
                  }));
                }}
              />
            </div>
            {/* <p>Specify shipping methods and costs, or integrate with platform-provided shipping solutions.</p>
                        <button>Configure Shipping</button> */}
          </section>
          <section>
            <h2>Visibility & Publication</h2>
            <ToggleElement
              title="Publish Now"
              value={productData.isPublished!}
              onToggle={(value) => {
                setProductData((prev) => ({
                  ...prev,
                  isPublished: value,
                }));
              }}
            />
          </section>
          <section>
            <span>Schedule Publishing (Optional)</span>
            <div className={style.inputs_row}>
              <InputElement
                error=""
                id="publishDate"
                label="Date"
                value={productData.publishDate!}
                name="publishDate"
                placeholder="Select date"
                type="text"
                onChange={inputValueChangeHandler}
              />
              <InputElement
                error=""
                id="publishTime"
                label="Time"
                value={productData.publishTime!}
                name="publishTime"
                placeholder="Select time"
                type="text"
                onChange={inputValueChangeHandler}
              />
            </div>
          </section>
          <div className={style.product_btns}>
            <button>Save Draft</button>
            <button onClick={addProductHandler}>Publish Product</button>
          </div>
        </div>
      </div>
    </>
  );
}
