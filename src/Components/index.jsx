import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
  Drawer,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppleIcon from "@mui/icons-material/Apple";
import FishIcon from "@mui/icons-material/SetMeal";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import PetIcon from "@mui/icons-material/Pets";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

const categoryData = [
  {
    label: "Fruits & Vegetables",
    icon: <AppleIcon />,
    subcategories: ["Fresh Fruits", "Fresh Vegetables"],
  },
  {
    label: "Meat & Fish",
    icon: <FishIcon />,
    subcategories: ["Meat", "Fish"],
  },
  {
    label: "Snacks",
    icon: <FastfoodIcon />,
    subcategories: [
      "Nuts & Biscuits",
      "Chocolates",
      "Crisps",
      "Noodles & Pasta",
      "Sauce",
      "Soup",
    ],
  },
  {
    label: "Pet Care",
    icon: <PetIcon />,
    subcategories: ["Dog Food", "Cat Food", "Pet Accessories"],
  },
  {
    label: "Home & Cleaning",
    icon: <CleaningServicesIcon />,
    subcategories: ["Cleaning Tools", "Detergents"],
  },
  {
    label: "Dairy",
    icon: <BreakfastDiningIcon />,
    subcategories: ["Milk", "Cheese", "Yogurt"],
  },
  {
    label: "Beverage",
    icon: <LocalDrinkIcon />,
    subcategories: ["Soft Drinks", "Juices"],
  },
  {
    label: "Health & Beauty",
    icon: <HealthAndSafetyIcon />,
    subcategories: ["Skin Care", "Hair Care"],
  },
];

const FilterMenu = () => {
  const [expanded, setExpanded] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        padding: 2,
        backgroundColor: "#f9f9f9",
        height: "100%",
      }}
      role="presentation"
    >
      <List>
        {categoryData.map((category, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleAccordionChange(index)}
            disableGutters
            sx={{
              boxShadow: "none",
              "&:before": { display: "none" },
              marginBottom: 1,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                padding: 0,
                margin: 0,
                backgroundColor: "#fff",
                borderRadius: "4px",
              }}
            >
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: "36px" }}>{category.icon}</ListItemIcon>
                <ListItemText primary={category.label} />
              </ListItem>
            </AccordionSummary>
            <AccordionDetails sx={{ paddingLeft: "36px", backgroundColor: "#f1f1f1" }}>
              <List disablePadding>
                {category.subcategories.map((subcategory, subIndex) => (
                  <ListItem key={subIndex} disablePadding>
                    <ListItemText primary={subcategory} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* Drawer Trigger Button */}
      <Button variant="contained" onClick={toggleDrawer(true)}>
        Open Filter Menu
      </Button>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default FilterMenu;
