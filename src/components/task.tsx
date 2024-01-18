import {Card, CardHeader,CardTitle, CardContent} from './ui/card'
import { Flex } from './ui/flex'
import { Component,ComponentProps,createSignal, onMount } from 'solid-js'
import { Select,SelectValue, SelectContent, SelectItem, SelectTrigger } from './ui/select'
import {  TaskInfo } from '~/interfaces/task'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Textarea } from './ui/textarea'
import { Combobox, ComboboxItem, ComboboxItemLabel, ComboboxItemIndicator,ComboboxInput, ComboboxContent, ComboboxTrigger,ComboboxControl } from './ui/combobox'



export function Task(props){

	const [status,setStatus] = createSignal(props.task.status)
	const options =[ {tid:'u891289u',title:'aslkdjasl'}]
		return <>
		<Card class='border-none h-full'>
			<CardHeader>
				<Flex flexDirection='col'>
					<CardTitle class='mb-2'>{props.task.title}</CardTitle>
					<Flex justifyContent='evenly'>
						<Select 
						value={status().toString()}
						onChange={setStatus}
						options={["Todo","Current","Done","Inactive"]}
						itemComponent={(props)=><SelectItem item={props.item}>{props.item.textValue}</SelectItem>}>
						<SelectTrigger aria-label="Fruit">
							<SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
						</SelectTrigger>
						<SelectContent />
						</Select>
						<Combobox 
						options={options}
						optionValue="tid"
						optionLabel="title"
						itemComponent={(props)=>
								<ComboboxItem item={props.item}>
									<ComboboxItemLabel>{props.item.rawValue.title}</ComboboxItemLabel>
									<ComboboxItemIndicator />
								</ComboboxItem>
						}> 
						<ComboboxControl aria-label="Parent">
						<ComboboxInput />
						<ComboboxTrigger />
					      </ComboboxControl>
					      <ComboboxContent />
					    </Combobox>
					</Flex>
				</Flex>
			</CardHeader>
			<CardContent>
			<Tabs defaultValue="description">
				<TabsList class='grid w-full grid-cols-2'>
					<TabsTrigger value="description">Description</TabsTrigger>
					<TabsTrigger value="subtasks">Subtasks</TabsTrigger>
				</TabsList>
				<TabsContent value="description">
					<Textarea class='h-full min-h-50dvh' aria-placeholder="Task related details or scratchpad" placeholder="Task related details or scratchpad"></Textarea>
				</TabsContent>
				<TabsContent value = "subtasks">
					<Card>
					Subtasks here
					</Card>
				</TabsContent>
			</Tabs>
			</CardContent>
		</Card>
		</>
}
