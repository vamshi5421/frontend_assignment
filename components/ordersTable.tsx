import { table } from "console"
import React, { useEffect, useState } from "react"
import { selectedTable } from "@/store/selectors/selectedTable"
import { useRecoilValue } from "recoil"

import DataTable from "@/components/dataTable"

export interface Column {
  accessor: string
  header: string
}

export interface DataTableProps<T> {
  columns: Column[]
  data: T[]
}

const orderColumns = [
  { accessor: "orderID", header: "Order ID" },
  { accessor: "customerID", header: "Customer ID" },
  { accessor: "employeeID", header: "Employee ID" },
  { accessor: "orderDate", header: "Order Date" },
  { accessor: "requiredDate", header: "Required Date" },
  { accessor: "shippedDate", header: "Shipped Date" },
  { accessor: "shipVia", header: "Ship Via" },
  { accessor: "freight", header: "Freight" },
  { accessor: "shipName", header: "Ship Name" },
  { accessor: "shipAddress", header: "Ship Address" },
  { accessor: "shipCity", header: "Ship City" },
  { accessor: "shipRegion", header: "Ship Region" },
  { accessor: "shipPostalCode", header: "Ship Postal Code" },
  { accessor: "shipCountry", header: "Ship Country" },
]

export interface Order {
  orderID: number
  customerID: string
  employeeID: number
  orderDate: string
  requiredDate: string
  shippedDate: string
  shipVia: number
  freight: number
  shipName: string
  shipAddress: string
  shipCity: string
  shipRegion: string | null
  shipPostalCode: number
  shipCountry: string
}

const customerColumns = [
  { accessor: "customerID", header: "Customer ID" },
  { accessor: "companyName", header: "Company Name" },
  { accessor: "contactName", header: "Contact Name" },
  { accessor: "contactTitle", header: "Contact Title" },
  { accessor: "address", header: "Address" },
  { accessor: "city", header: "City" },
  { accessor: "region", header: "Region" },
  { accessor: "postalCode", header: "Postal Code" },
  { accessor: "country", header: "Country" },
  { accessor: "phone", header: "Phone" },
  { accessor: "fax", header: "Fax" },
]

export interface Customer {
  customerID: string
  companyName: string
  contactName: string
  contactTitle: string
  address: string
  city: string
  region: string | null
  postalCode: number
  country: string
  phone: string
  fax: string
}

const productColumns = [
  { accessor: "productID", header: "Product ID" },
  { accessor: "productName", header: "Product Name" },
  { accessor: "supplierID", header: "Supplier ID" },
  { accessor: "categoryID", header: "Category ID" },
  { accessor: "quantityPerUnit", header: "Quantity Per Unit" },
  { accessor: "unitPrice", header: "Unit Price" },
  { accessor: "unitsInStock", header: "Units In Stock" },
  { accessor: "unitsOnOrder", header: "Units On Order" },
  { accessor: "reorderLevel", header: "Reorder Level" },
  { accessor: "discontinued", header: "Discontinued" },
]

export interface Product {
  productID: number
  productName: string
  supplierID: number
  categoryID: number
  quantityPerUnit: string
  unitPrice: number
  unitsInStock: number
  unitsOnOrder: number
  reorderLevel: number
  discontinued: number
}

function OrdersTable() {
  const tb_name = useRecoilValue(selectedTable)

  const [orders, setOrders] = useState<Order[]>([])
  const [product, setProducts] = useState<Product[]>([])
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchOrder()
        setOrders(data)
      } catch (error) {
        console.error("Error fetching JSON data:", error)
      }

      try {
        const data = await fetchCustomer()
        setCustomers(data)
      } catch (error) {
        console.error("Error fetching JSON data:", error)
      }

      try {
        const data = await fecthProduct()
        setProducts(data)
      } catch (error) {
        console.error("Error fetching JSON data:", error)
      }
    }

    fetchData()
  }, [])

  if (tb_name === "order") {
    return <DataTable columns={orderColumns} data={orders} />
  } else if (tb_name === "product") {
    return <DataTable columns={productColumns} data={product} />
  } else if (tb_name === "course") {
    return <DataTable columns={customerColumns} data={customers} />
  } else {
    return <p className="m-4">Result</p>
  }
}

export default OrdersTable

export async function fetchOrder() {
  const response = await fetch("/orders.json") // Path to your JSON file in the public folder
  const data = await response.json()
  return data
}

export async function fecthProduct() {
  const response = await fetch("/products.json") // Path to your JSON file in the public folder
  const data = await response.json()
  return data
}
export async function fetchCustomer() {
  const response = await fetch("/customer.json") // Path to your JSON file in the public folder
  const data = await response.json()
  return data
}
