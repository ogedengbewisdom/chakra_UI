import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea} from "@chakra-ui/react";

import { Form, redirect } from "react-router-dom";

export default function Create() {
  

  return (
    <Form method="post" action="/create">
      <Box width={"480px"}>
        <FormControl isRequired mb={"20px"}>
          <FormLabel>Task Name</FormLabel>
          <Input type="text" name="name" />
          <FormHelperText>Please Enter Your Task</FormHelperText>
        </FormControl>

        <FormControl mb={"20px"}>
          <FormLabel>Task Description</FormLabel>
          <Textarea 
          placeholder="Enter task Description"
          name="description"
          />
        </FormControl>

        <FormControl display="flex" mt="10px" mb="20px" >
          <Checkbox 
          name="isPriority"
          size="lg"
          colorScheme="purple"
          />
          <FormLabel ml={"10px"}>Make this a piority</FormLabel>
        </FormControl>

        <Button type="submit">Submit</Button>
      </Box>
    </Form>
  )
}


export const sumbitTask = async ({request}) => {
  const data = await request.formData()

  const dataObj = {
    name: data.get("name"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === ""
  }

  console.log(dataObj)

  return redirect("/")
}